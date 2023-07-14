import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import Navigation from "../../Components/Navigation";
import { api } from "axios  @tanstack/react-query/utils/api";

type Props = {};

type Vechicle = {
  id: string;
  vechicleType: string;
  vechicleRegNo: number;
  vechicleDescription: string;
  routeFrom: string;
  routeTo: string;
  price: number;
  departure: Date;
  totalSeats: number;
  image: string;
};

const Booking = (props: Props) => {
  const [responesData, setResponseData] = useState<Vechicle[]>([]);
  const { data, isFetched } = api.Vechicle.getAllVechicle.useQuery();

  useEffect(() => {
    if (data) {
      setResponseData(data);
    }
  }, [isFetched]);

  return (
    <>
      <Navigation />
      <div className="h-screen">
        <div className=" h-full bg-zinc-950 pt-32">
          {isFetched && (
            <div
              className=" grid-gap
          col-auto
          row-auto
          mx-5
          grid
          h-full grid-cols-2 gap-10 md:mx-24 lg:mx-32  lg:grid-cols-2 lg:gap-x-20 xl:grid-cols-3 xl:gap-10 2xl:grid-cols-4  2xl:gap-10"
            >
              {responesData.map((vechicle) => (
                <BookCard
                  key={vechicle.id}
                  id={vechicle.id}
                  vechicleType={vechicle.vechicleType}
                  routeFrom={vechicle.routeFrom}
                  routeTo={vechicle.routeTo}
                  image={vechicle.image}
                  vechicleDescription={vechicle.vechicleDescription}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Booking;
