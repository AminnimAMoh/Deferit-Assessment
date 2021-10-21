import React, { ReactElement, useEffect, useState } from "react";
import { request } from "../../context/AppFetch";
import dynamic from "next/dynamic";
import { Data } from "../../types/GlobalType";

const Card = dynamic(() => import("./Crad"));
const Heading = dynamic(() => import("../Heading"));

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
    <div style={{width:'100%'}}>
              <Heading />
      {listData && listData.map((data, index) => {
          return (
              <Card key={index} {...data}/>
          )
      })}
    </div>
  );
}

export default RecieptsList;
