import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Geoenvi</title>
        <meta name="description" content="Geo Environments Company" />
      </Head>
      <div className="px-4 mx-auto max-w-7xl">
        <Header />
        <main className="my-5">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
