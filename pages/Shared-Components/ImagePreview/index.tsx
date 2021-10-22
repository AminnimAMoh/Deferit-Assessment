import React, { ReactElement } from "react";
import styles from "../../../styles/ImagePreview.module.scss";
import { useAppContext } from "../../../context/AppContext";
import Image from "next/image";

interface Props {
  url: string;
}

function ImagePreview({ url }: Props): ReactElement {
  const { dispatch } = useAppContext();
  const closePreview = () => {
    dispatch({ type: "preview/close_priview", value: "" });
  };
  return (
    <div className={styles.container} onClick={closePreview}>
        <Image src={url} alt="content" width={550} height={779} />
    </div>
  );
}

export default ImagePreview;
