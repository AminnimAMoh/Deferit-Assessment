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
      {hoverValue && (
        <div
          className={styles.container__snack}
          style={hoverValue ? { width: "auto" } : { width: 0 }}
        >
          <h4>Status: {status}</h4>
          <p
            className={styles.container__status}
            style={hoverValue ? { width: "fit-content" } : { width: 0 }}
          >
            {status === "processing"
              ? "This bill is currently in processing, it can take approx. 1-2 hours depending on the time of day."
              : status === "scheduled"
              ? "This bill is scheduled to be paid and will be paid on the due date, you are in good hands."
              : "This is a dummy text. Need to fill in."}
          </p>
        </div>
      )}
    </div>
  );
}

export default Card;
