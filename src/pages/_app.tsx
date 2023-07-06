import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "axios  @tanstack/react-query/utils/api";
import "axios  @tanstack/react-query/styles/globals.css";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ClerkProvider {...pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
