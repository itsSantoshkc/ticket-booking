import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { api } from "axios  @tanstack/react-query/utils/api";
import { useUser } from "@clerk/nextjs";

export default function Layout({ children }: any) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | undefined>(false);
  const { isLoaded, isSignedIn, user } = useUser();

  const { data, isFetched } = api.User.getUserById.useQuery();

  useEffect(() => {
    if (data && data !== null) {
      setIsAdmin(data?.admin);
    }
  }, [isFetched]);

  return (
    <>
      {router.pathname !== "/_error" && (
        <Navbar
          isAdmin={isAdmin}
          user={user}
          isLoaded={isLoaded}
          isSignedIn={isSignedIn}
        />
      )}
      <main>{children}</main>
    </>
  );
}
