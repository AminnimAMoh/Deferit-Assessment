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
  if (data.items === "error") {
    console.log("error");
  }
  return { props: { ...data } };
};

function RecieptsList(): ReactElement {
  const {state: {pageNumber}, dispatch} = useAppContext();
  const { data, loading, error } = usePagination({ pageNumber: 1 });
  const [nodeCopy, setNodeCopy] = useState(null);
  // const [pageNumber, setPageNumber]=useState<number>(1);
  //As the type check getting on my way I put the reference type as any.
  const observer = useRef<any>();
  console.log(pageNumber);
  
  //As I am mutating the current every time the last element on the list changes
  //The is a chance to lose track so it is better to keep track of the previous 'current' state.
  //Solution from: https://non-traditional.dev/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
  useEffect(() => {
    const { current: currentObserver } = observer;
    if (nodeCopy) currentObserver.observe(nodeCopy);
    return () => currentObserver.disconnect();
  }, [nodeCopy]);

  const lastDataPrinted = useCallback(
    (node: HTMLDivElement): void => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("This is working.");
          dispatch({type: "paginattion/Increment-pageNumber"})
        }
      });
      if (node) observer.current.observe(node);
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
