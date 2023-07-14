import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../Components/UI/card";
import { Button } from "../../Components/UI/button";
import { Badge } from "../../Components/UI/badge";
import Link from "next/link";

type Props = {
  id: string;
  vechicleType: string;
  vechicleDescription: string;
  routeFrom: string;
  routeTo: string;
};

const BookCard = (props: Props) => {
  return (
    <>
      <Card className=" flex h-2/3 rounded-xl border border-slate-600 bg-zinc-950">
        <CardContent className="min-w-full p-2 ">
          <img
            className="h-64 w-full  rounded-2xl lg:h-72 xl:h-80   2xl:h-80"
            src="https://i.pinimg.com/564x/79/6a/05/796a05c8a35fb1cf9a4bdc98653c353f.jpg"
            alt="image"
          />
          <div className=" mx-2 my-5">
            <CardTitle className="my-2 text-2xl font-extrabold text-white md:text-3xl">
              {props.vechicleType}
            </CardTitle>
            <CardDescription className="my text-xs text-slate-300 md:text-sm">
              {props.vechicleDescription}
            </CardDescription>
            <div className="mt-4">
              <Badge
                variant={"secondary"}
                className="text-xs text-zinc-950 md:text-sm"
              >
                Route : {props.routeFrom + props.routeTo}
              </Badge>
            </div>
          </div>
          <div className="s-ful m-5 flex justify-end">
            <Button variant="secondary">
              <Link href={`/booking/${props.id}`}>Book Now</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BookCard;
