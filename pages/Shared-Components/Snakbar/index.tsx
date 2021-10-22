import React, { ReactElement } from "react";
import styles from "../../../styles/SnackBar.module.scss";

interface Props {
  hoverValue: boolean;
  status: string;
}

function Snackbar({ hoverValue, status }: Props): ReactElement {
  return (
    <div
      className={styles[hoverValue ? 'container__open' : 'container__close']}
    >
      <h4
        className={styles.container__status}
      >
        Status: {status}
      </h4>
      <p
        className={styles.container__status}
      >
        {status === "processing"
          ? "This bill is currently in processing, it can take approx. 1-2 hours depending on the time of day."
          : status === "scheduled"
          ? "This bill is scheduled to be paid and will be paid on the due date, you are in good hands."
          : "This is a dummy text. Need to fill in."}
      </p>
    </div>
  );
}

export default Snackbar;
