import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div>
        <h4>About BTC Rates</h4>
        <p>An app to view BTC prices</p>
        <style jsx>{`
          div {
            max-width: 30rem;
            margin: 1rem;
          }
        `}</style>
      </div>
    </Layout>
  );
}
