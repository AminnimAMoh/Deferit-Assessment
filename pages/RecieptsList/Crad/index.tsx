import React, { ReactElement } from "react";
import Image from "next/image";
import { Data } from "../../../types/GlobalType";
import styles from "../../../styles/Card.module.scss";
import useHover from "../../../hooks/useHover";
import Snackbar from "../../Shared-Components/Snakbar";

function Card({
  img: { thumbnail, url },
  amount,
  date,
  status,
}: Data): ReactElement {
  const [hoverRef, hoverValue] = useHover<HTMLDivElement>();
  return (
    <div ref={hoverRef} className={styles[hoverValue ?'container__open' : 'container__close']}>
      <Image src={thumbnail} alt="content" width="100" height="100" />
      <p>{amount}</p>
      <p>{date}</p>
      <p className={styles.container__status}>{status}</p>
      <Snackbar hoverValue={hoverValue} status={status} />
    </div>
  );
}

export default Card;
