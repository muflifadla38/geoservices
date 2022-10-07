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
      <div className="container px-4 md:mx-auto sm:mx-5 sm:container-sm">
        <Header />
        <main className="my-5">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
