import Navbar from "./Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/_error" && <Navbar />}
      <main>{children}</main>
    </>
  );
}
