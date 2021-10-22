import React, { ReactElement } from "react";
import Image from "next/image";
import { Data } from "../../../types/GlobalType";
import styles from "../../../styles/Card.module.scss";
import useHover from "../../../hooks/useHover";

function Card({
  img: { thumbnail, url },
  amount,
  date,
  status,
}: Data): ReactElement {
  const [hoverRef, hoverValue] = useHover<HTMLDivElement>();
  return (
    <div className={styles.container} ref={hoverRef}>
        <Image src={thumbnail} alt="content" width="100" height="100" />
        <p>{amount}</p>
        <p>{date}</p>
        <p className={styles.container__status}>{status}</p>
    </div>
  );
}

export default Card;
