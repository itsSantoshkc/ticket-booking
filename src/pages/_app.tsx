import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "axios  @tanstack/react-query/utils/api";
import "axios  @tanstack/react-query/styles/globals.css";
import Layout from "./Components/Layout";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ClerkProvider {...pageProps}>
        <Layout>
          <Head>
            <title>Booker</title>
            <link rel="icon" href="/booker-logo.svg" type="image/svg" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
