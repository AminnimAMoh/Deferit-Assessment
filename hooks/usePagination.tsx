import React, { ReactElement, useState, useEffect } from "react";
import { Data } from "../types/GlobalType";
import { request } from "../context/AppFetch";
import { useAppContext } from "../context/AppContext"; 

interface Request {
  props: Data[];
}

function usePagination(): any {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(true);
  const [data, setData] = useState<Data[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const {state: {pageNumber}}=useAppContext()

  useEffect(() => {
    setLoading(true);
    setError(false);
    request(pageNumber)
      .then((res) => {
        setData((preVal) => {
          return [...preVal, ...res];
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [pageNumber]);
  return { loading, error, data, hasMore };
}

export default usePagination;
