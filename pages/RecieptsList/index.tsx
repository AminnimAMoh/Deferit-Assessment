import React, { ReactElement, useEffect, useState } from 'react'
import {request} from '../../context/AppFetch'

export const getServerSideProps = async () => {
    const data = await request();
    if (data.items === "error") {
      console.log("error");
    }
    return { props: { ...data } };
  };

function RecieptsList(): ReactElement {
    const [listData, setListData]=useState();

    useEffect(() => {
        request().then((res) => {
          if (res) {
            setListData(res);
          }
        });
      }, []);

    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default RecieptsList
