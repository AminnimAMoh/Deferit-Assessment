import React, { ReactElement } from "react";
import styles from "../../../styles/SnackBar.module.scss";

interface Props {
  hoverValue: boolean;
  status: string;
}


function Snackbar({ hoverValue, status }: Props): ReactElement {
  const statusPrompts: any = {
    processing:
      "This bill is currently in processing, it can take approx. 1-2 hours depending on the time of day.",
    scheduled:
      "This bill is scheduled to be paid and will be paid on the due date, you are in good hands.",
    paid: "The full amount for this receipt is paid. No payment is required.",
    default:
      "There was a problem with your payment. Please update the payment method.",
  };

  return (
    <div
      className={styles[hoverValue ? "container__open" : "container__close"]}
    >
      <h4 className={status === "unable to pay" ? styles["container__status__default"] : styles["container__status__"+status]}>Status: {status}</h4>
      <p className={styles.container__status}>
        {status === "unable to pay"
          ? statusPrompts.default
          : statusPrompts[`${status}`]}
      </p>
    </div>
  );
}

export default Snackbar;
