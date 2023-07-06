import React from "react";
import BookCard from "./BookCard";

type Props = {};

const Booking = (props: Props) => {
  return (
    <>
      <div
        className=" grid-gap
      col-auto
      row-auto
      mx-5
      grid gap-10 pt-5  md:mx-24 md:grid-cols-2 lg:mx-32 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5"
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
    </>
  );
};

export default Booking;
