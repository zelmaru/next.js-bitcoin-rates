import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Home = (props) => {
  return (
    <Layout>
      <div>
        <h4>Welcome to BTC Rates</h4>
        <h6>Check current BTC rate:</h6>
        <Prices bpi={props.bpi} />
        <style jsx>{`
          div {
            max-width: 30rem;
            margin: 1rem;
          }
        `}</style>
      </div>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const json = await res.json();
  return { bpi: json };
};

export default Home;
