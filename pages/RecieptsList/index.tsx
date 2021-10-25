import React, {
  ReactElement,
  useRef,
  useCallback,
  ComponentType,
  RefObject,
} from "react";
import { request } from "../../context/AppFetch";
import usePagination from "../../hooks/usePagination";
import dynamic from "next/dynamic";
import { Data } from "../../types/GlobalType";
import styles from "../../styles/RecieptsList.module.scss";

const Card = dynamic(() => import("./Crad"));

export const getServerSideProps = async () => {
  const data = await request(1);
  if (data.items === "error") {
    console.log("error");
  }
  return { props: { ...data } };
};

function RecieptsList(): ReactElement {
  const { data, loading, error } = usePagination({ pageNumber: 1 });

  //As the type check getting on my way I put the reference type as any.
  const observer = useRef<any>();
  const lastDataPrinted = useCallback(
    (node: HTMLDivElement): void => {
      if(loading) return;
      if(observer.current) observer.current.disconnect();
      observer.current=new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting) console.log("This is working.");
      })
      if(node) observer.current.observe(node);
      console.log(node);
    },
    [loading]
  );

  return (
    <div className={styles.container}>
      {data.length > 0 &&
        data.map((d: Data, index: number) => {
          return data.length === index + 1 ? (
            <div ref={lastDataPrinted} key={index}>
            <Card  {...d} />
            </div>
          ) : (
            <Card key={index} {...d} />
          );
        })}
        {loading && <p>Loading...</p>}
        {error && <p>Somthing went wrong!!!</p>}
    </div>
  );
}

export default RecieptsList;
