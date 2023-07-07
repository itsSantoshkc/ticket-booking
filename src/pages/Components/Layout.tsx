import { useRouter } from "next/router";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/_error" && <Navbar />}
      <main>{children}</main>
    </>
  );
}
