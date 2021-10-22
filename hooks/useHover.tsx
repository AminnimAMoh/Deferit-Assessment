import React, {useState, useRef, useEffect, MutableRefObject } from 'react'


function UseHover<T>(): [MutableRefObject<T | null>, boolean] {
    const [value, setValue]=useState<any>(false);
    const ref=useRef<T | null>(null);

    const handleMouseOver=(): void=>setValue(true);
    const handleMouseOut=(): void=>setValue(false);

    useEffect(() => {
        const node: any=ref.current;
        if(node){
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut)
            return () => {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut)
            }
        }else{
            return;
        }
    }, [ref.current]);

    return [ref, value]
}

export default UseHover
