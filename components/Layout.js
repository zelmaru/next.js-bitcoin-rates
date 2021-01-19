import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>BTC Rates</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cyborg/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
}
