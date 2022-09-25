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
      <div className="container mx-auto bg-slate-300">
        <Header />
        <main className="bg-slate-200 h-screen my-5">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
