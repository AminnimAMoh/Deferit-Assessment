import React, { ReactElement, useEffect, useState } from "react";
import { request } from "../../context/AppFetch";
import usePagination from "../../hooks/usePagination";
import dynamic from "next/dynamic";
import { Data } from "../../types/GlobalType";
import styles from '../../styles/RecieptsList.module.scss'

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
  const {data}=usePagination({pageNumber:1});
  console.log(data);
  
  useEffect(() => {
    // request(1).then((res) => {
    //   if (res) {
    //     setListData(res);
    //   }
    // });
  }, []);

  return (
    <div className={styles.container}>
      {data.length>0 && data[0].map((data: Data, index: number) => {
          return (
              <Card key={index} {...data}/>
          )
      })}
    </div>
  );
}

export default RecieptsList;
