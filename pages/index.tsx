import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useAppContext } from "../context/AppContext";
import ImagePreview from "./Shared-Components/ImagePreview";

// const Heading = dynamic(() => import("./Heading"));

const RecieptsList = dynamic(() => import("./RecieptsList"));

const Home: NextPage = () => {
  const {
    state: { previewState, url },
  } = useAppContext();

  return (
    <div className={styles.container}>
      <Head>
        <title>Deferit Assessment</title>
        <meta name="description" content="Deferit Technical Assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container__main}>
        {previewState && <ImagePreview url={url} />}
        <h2>Receipts</h2>
        <RecieptsList />
      </main>
    </div>
  );
};

export default Home;
