import Head from "next/head";
// import Link from "next/link";

// import { api } from "axios  @tanstack/react-query/utils/api";
import { Button } from "./Components/UI/button";
import Booking from "./booking/boooking";

export default function Home() {
  return (
    <>
      <Head>
        <title>Booker</title>
      </Head>
      <div className="h-screen bg-zinc-950">
        <Booking />
        <Button variant={"outline"}>Click Me</Button>
      </div>
    </>
  );
}
