import Head from "next/head";
// import Link from "next/link";

// import { api } from "axios  @tanstack/react-query/utils/api";
import { Button } from "./Components/UI/button";
import Booking from "./booking";
import Navigation from "./Components/Navigation";

export default function Home() {
  return (
    <>

      <div className="h-full bg-zinc-950">
        <Navigation />
        <Booking />
      </div>
    </>
  );
}
