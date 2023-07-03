import { type AppType } from "next/app";
import { api } from "axios  @tanstack/react-query/utils/api";
import "axios  @tanstack/react-query/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
