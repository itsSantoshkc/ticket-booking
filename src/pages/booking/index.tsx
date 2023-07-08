import React from "react";
import BookCard from "./BookCard";
import Navigation from "../Components/Navigation";

type Props = {};

const Booking = (props: Props) => {
  return (
    <>
      <div>
        <Navigation />
        <div className=" h-full bg-zinc-950 pt-32">
          <div
            className=" grid-gap
          col-auto
          row-auto
          mx-5
          grid
          h-full grid-cols-2 gap-10 md:mx-24 lg:mx-32  lg:grid-cols-2 lg:gap-x-20 xl:grid-cols-3 xl:gap-10 2xl:grid-cols-4  2xl:gap-10"
          >
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
