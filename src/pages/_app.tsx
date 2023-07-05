import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "axios  @tanstack/react-query/utils/api";
import "axios  @tanstack/react-query/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
