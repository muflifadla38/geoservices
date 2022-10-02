import { Html, Head, Main, NextScript } from "next/document";

const Documents = () => {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="icon" href="/logo-3.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Documents;
