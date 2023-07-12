import React, { useState } from "react";
import { Button } from "./UI/button";
import { Input } from "./UI/input";
import { ArrowUpDown, Search, SortAsc } from "lucide-react";

const Navigation = () => {
  return (
    <div className="h-full p-3">
      <div className="my-4 flex w-full justify-center pb-7">
        <div className="flex w-1/2 items-center text-white md:w-1/3 xl:w-1/4 ">
          <Input
            type="email"
            className="rounded-none border-b border-l-0 border-r-0 border-t-0  bg-zinc-950 text-white  "
            placeholder="Search Route,Price"
          />
          <Button type="submit" variant={"outline"} className=" text-black">
            <Search />
          </Button>
        </div>
      </div>
      <div className="flex justify-center ">
        <Button variant={"outline"} className="mx-2 px-5">
          Price
          <ArrowUpDown className="mx-2" />
        </Button>
        <Button variant={"outline"} className="mx-2 px-5">
          Seats Available
          <ArrowUpDown className="mx-2" />
        </Button>
        <Button variant={"outline"} className="mx-2 px-5">
          Departure Time
          <ArrowUpDown className="mx-2" />
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
