import React, { ReactElement, useState, useEffect } from 'react'
import {Data} from '../types/GlobalType'
import {request} from '../context/AppFetch'

interface Request{
        props: Data[];
}

interface Props{
    pageNumber: number;
}

function usePagination({pageNumber}: Props): any {
    const [loading, setLoading]=useState<boolean>(false);
    const [error, setError]=useState<boolean>(true);
    const [data, setData]=useState<Data[]>([]);
    const [hasMore, setHasMore]=useState<boolean>(false);


    useEffect(()=>{
        setLoading(true)
        setError(false);
        request(pageNumber).then((res)=>{
            setData(preVal=> {
                return [...preVal,res]
            })
        }).catch(err=>{
            console.log(err);
        });
        
    }, [pageNumber])
    return {loading, error, data, hasMore}
}

export default usePagination
