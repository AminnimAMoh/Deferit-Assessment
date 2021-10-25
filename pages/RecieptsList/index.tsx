import React, {
  ReactElement,
  useRef,
  useCallback,
  useState,
  useEffect,
  ComponentType,
  RefObject,
} from "react";
import { request } from "../../context/AppFetch";
import usePagination from "../../hooks/usePagination";
import { useAppContext } from "../../context/AppContext";
import dynamic from "next/dynamic";
import { Data } from "../../types/GlobalType";
import styles from "../../styles/RecieptsList.module.scss";

const Card = dynamic(() => import("./Crad"));

export const getServerSideProps = async () => {
  const data = await request(1);
  if (data.item === "error") {
    console.log("error");
  }
  return { props: { ...data } };
};

function RecieptsList(): ReactElement {
  const {state: {pageNumber}, dispatch} = useAppContext();
  const { data, loading, error, hasMore } = usePagination();

  // const [pageNumber, setPageNumber]=useState<number>(1);
  //As the type check getting on my way I put the reference type as any.
  const observer = useRef<any>();

  console.log(hasMore);
  
  const lastDataPrinted = useCallback(
    (node: HTMLDivElement): void => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch({type: "paginattion/Increment-pageNumber"})
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div className={styles.container}>
      {data.length > 0 &&
        data.map((d: Data, index: number) => {
          return data.length === index + 1 ? (
            <div ref={lastDataPrinted} key={index}>
              <Card {...d} />
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
