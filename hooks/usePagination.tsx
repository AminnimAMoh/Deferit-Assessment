import React, { ReactElement, useState, useEffect } from "react";
import { Data } from "../types/GlobalType";
import { request } from "../pages/api/AppFetch";
import { useAppContext } from "../context/AppContext";

interface Request {
  props: {
    data: Data[];
    end: number | undefined;
    item?: string;
  };
}

function usePagination(): any {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(true);
  const [data, setData] = useState<Data[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const {
    state: { pageNumber },
  } = useAppContext();

  useEffect(() => {
    setLoading(true);
    setError(false);
    request(pageNumber)
      .then((res) => {
        setData((preVal) => {
          return [...preVal, ...res.data];
        });
        setLoading(false);
        if(res.end===pageNumber) setHasMore(false)
      })
      .catch((err) => {
        console.log(err.status);
        setError(true);
      });
  }, [pageNumber]);
  return { loading, error, data, hasMore };
}

export default usePagination;
