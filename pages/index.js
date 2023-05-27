import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next Portfolio</title>
        <meta name="description" content="next portfolio app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
    </Layout>
  );
}
