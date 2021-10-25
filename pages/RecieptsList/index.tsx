import React, {
  ReactElement,
  useEffect,
  useState,
  useRef,
  useCallback,
  ComponentType,
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
  const [listData, setListData] = useState<Data[]>();
  const { data, loading, error } = usePagination({ pageNumber: 1 });

  const observer = useRef<HTMLDivElement | null>(null);
  const lastDataPrinted = useCallback(
    (node: HTMLDivElement): void => {
      console.log(node);
    },
    []
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
    </div>
  );
}

export default RecieptsList;
