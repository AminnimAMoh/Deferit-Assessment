import React, { ReactElement, useEffect, useState } from "react";
import { request } from "../../context/AppFetch";
import dynamic from "next/dynamic";
import { Data } from "../../types/GlobalType";
import styles from '../../styles/RecieptsList.module.scss'

const Card = dynamic(() => import("./Crad"));

export const getServerSideProps = async () => {
  const data = await request();
  if (data.items === "error") {
    console.log("error");
  }
  return { props: { ...data } };
};

function RecieptsList(): ReactElement {
  const [listData, setListData] = useState<Data[]>();

  useEffect(() => {
    request().then((res) => {
      if (res) {
        setListData(res);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      {listData && listData.map((data, index) => {
          return (
              <Card key={index} {...data}/>
          )
      })}
    </div>
  );
}

export default RecieptsList;
