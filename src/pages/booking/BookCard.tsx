import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../Components/UI/card";
import { Button } from "../../Components/UI/button";
import { Badge } from "../../Components/UI/badge";

type Props = {};

const BookCard = (props: Props) => {
  return (
    <>
      <Card className=" flex rounded-xl border border-slate-600 bg-zinc-950">
        <CardContent className="min-w-full p-2 ">
          <img
            className="h-64 w-full  rounded-2xl lg:h-72 xl:h-80   2xl:h-80"
            src="https://i.pinimg.com/564x/79/6a/05/796a05c8a35fb1cf9a4bdc98653c353f.jpg"
            alt="image"
          />
          <div className=" mx-2 my-5">
            <CardTitle className="my-2 text-2xl font-extrabold text-white md:text-3xl">
              Bus 101
            </CardTitle>
            <CardDescription className="my text-xs text-slate-300 md:text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              quo harum repellat quos expedita !
            </CardDescription>
            <div className="mt-4">
              <Badge
                variant={"secondary"}
                className="text-xs text-zinc-950 md:text-sm"
              >
                Route : Kathmandu to Pokhara{" "}
              </Badge>
            </div>
          </div>
          <div className="s-ful m-5 flex justify-end">
            <Button variant="secondary">Book Now</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BookCard;
