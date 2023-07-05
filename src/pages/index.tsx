import Head from "next/head";
import Link from "next/link";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignedOut,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import { api } from "axios  @tanstack/react-query/utils/api";

export default function Home() {
  const goodbye = api.booking.goodbye.useQuery({ message: "Hello from tRPC" });
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();

  return (
    <>
      <SignInButton />
      {!isLoaded ? (
        <h1>loading</h1>
      ) : (
        <div>
          <h1>{goodbye.data?.message}</h1>
          {isSignedIn ? (
            <div>
              <img src={user.imageUrl} />
              <h1>{user.firstName}</h1>
            </div>
          ) : (
            <h2>Loading</h2>
          )}

          <SignOutButton />
        </div>
      )}
    </>
  );
}
