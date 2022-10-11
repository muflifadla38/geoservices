import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
        <ScrollToTop />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
