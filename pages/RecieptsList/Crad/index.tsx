import React, { ReactElement } from "react";
import Image from "next/image";
import { Data } from "../../../types/GlobalType";
import styles from "../../../styles/Card.module.scss";
import useHover from "../../../hooks/useHover";
import Snackbar from "../../Shared-Components/Snakbar";
import { useAppContext } from "../../../context/AppContext";

function Card({ id, img, amount, date, status }: Data): ReactElement {
  const { dispatch } = useAppContext();
  const [hoverRef, hoverValue] = useHover<HTMLDivElement>();

  const showPreview = (url: string) => {
    dispatch({ type: "preview/open_priview", value: url });
  };
  return (
    <div
      ref={hoverRef}
      className={styles[hoverValue ? "container__open" : "container__close"]}
    >
      {img && (
        <Image
          src={img.thumbnail}
          alt="content"
          className={styles.container__Image}
          width="100"
          height="100"
          onClick={() => showPreview(img.url)}
        />
      )}
      <p className={styles.container__info}>{amount}</p>
      <p className={styles.container__info}>{date}</p>
      <p className={styles.container__status}>{status}</p>
      <Snackbar hoverValue={hoverValue} status={status} />
    </div>
  );
}

export default Card;
