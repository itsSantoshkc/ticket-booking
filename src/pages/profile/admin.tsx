import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/UI/card";
import { Input } from "../../Components/UI/input";
import { Label } from "../../Components/UI/label";
import { Button } from "../../Components/UI/button";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../../Components/UI/select";
import { Calendar } from "../../Components/UI/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../Components/UI/popover";
import { CalendarIcon } from "lucide-react";
import { api } from "axios  @tanstack/react-query/utils/api";

const admin = () => {
  const Hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const Formats = ["AM", "PM"];
  const Minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hour, setHour] = useState<string>("");
  const [minute, setMinute] = useState<string>("");
  const [format, setFormat] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [regNo, setRegNo] = useState<number>(0);
  const [totalSeats, setTotalSeats] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [routeFrom, setRouteFrom] = useState<string>("");
  const [routeTo, setRouteTo] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const { mutate } = api.Vechicle.addVechicle.useMutation();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (hour && minute && format) {
      date?.setMinutes(Number(minute));
      format === "PM"
        ? date?.setHours(Number(hour) + 12)
        : date?.setHours(Number(hour));
    }
    const submittedData = {
      vechicleType: name,
      vechicleRegNo: regNo,
      vechicleDescription: description,
      routeFrom: routeFrom,
      routeTo: routeTo,
      price: price,
      departure: date,
      totalSeats: totalSeats,
    };
    //@ts-expect-error
    mutate(submittedData);

    setDate(undefined);
    setHour("");
    setMinute("");
    setFormat("");
    setName("");
    setRegNo(0);
    setTotalSeats(0);
    setDescription("");
    setRouteFrom("");
    setRouteTo("");
    setPrice(0);
  };

  return (
    <>
      <div className="h-full bg-zinc-950 text-white">
        <div className="h-screen  items-center justify-center bg-zinc-950 py-10 md:flex">
          <div className="mx-4 flex flex-col items-center justify-center border-slate-400 bg-zinc-950 text-white md:w-1/2 xl:w-1/3">
            <Card className="w-full bg-zinc-950 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Add New Item in Booker
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full ">
                <div className="mx-5 mb-5 flex flex-col items-start justify-center ">
                  <Label className="my-4">Vechicle Type : </Label>
                  <Input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="h-62 w-full rounded-xl border-b border-l-0 border-r-0 border-t-0  bg-zinc-950"
                    placeholder="Name"
                  />
                  <Label className="my-4">Vechicle Reg No : </Label>
                  <Input
                    type="text"
                    onChange={(e) => setRegNo(parseInt(e.target.value))}
                    pattern="[0-9]+"
                    className="h-62 w-full rounded-xl border-b border-l-0 border-r-0 border-t-0  bg-zinc-950"
                    placeholder="Vechicle Registration Number"
                  />

                  <Label className="my-4">Vechicle Description : </Label>
                  <Input
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className="h-62 w-full rounded-xl border-l-0 border-r-0 border-t-0 bg-zinc-950 "
                    placeholder="Description"
                  />
                  <Label className="my-4">Route From : </Label>
                  <Input
                    onChange={(e) => setRouteFrom(e.target.value)}
                    type="text"
                    className="h-62 w-full rounded-xl border-l-0 border-r-0 border-t-0 bg-zinc-950 "
                    placeholder="Route From"
                  />
                  <Label className="my-4">Route To : </Label>
                  <Input
                    onChange={(e) => setRouteTo(e.target.value)}
                    type="text"
                    className="h-62 w-full rounded-xl border-l-0  border-r-0 border-t-0 bg-zinc-950"
                    placeholder="Route To"
                  />
                  <Label className="my-4">Price : </Label>
                  <Input
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    type="text"
                    className="h-62 w-full rounded-xl border-l-0  border-r-0 border-t-0 bg-zinc-950"
                    placeholder="Price"
                  />
                  <Label className="my-4 w-full">Time : </Label>
                  <div className="my-4 flex w-full items-center justify-center gap-5  ">
                    <Select onValueChange={setHour}>
                      <SelectTrigger>
                        <SelectValue placeholder="Hour" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Hour</SelectLabel>
                          {Hours?.map((hour) => (
                            <SelectItem key={hour} value={hour.toString()}>
                              {hour}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select onValueChange={setMinute}>
                      <SelectTrigger>
                        <SelectValue placeholder="Minute" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Minute</SelectLabel>
                          {Minutes?.map((minute) => (
                            <SelectItem key={minute} value={minute.toString()}>
                              {minute}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select onValueChange={setFormat}>
                      <SelectTrigger>
                        <SelectValue placeholder="AM / PM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>AM / PM </SelectLabel>
                          {Formats?.map((format) => (
                            <SelectItem key={format} value={format.toString()}>
                              {format}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <Label className="my-4 w-full">Date : </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="md:flex md:w-full md:justify-center">
                        <Button
                          variant={"outline"}
                          className="px-8 text-black md:w-1/2"
                        >
                          <span>
                            {date?.getFullYear() +
                              "/" +
                              (Number(date?.getMonth()) + 1) +
                              "/" +
                              date?.getDate()}
                          </span>
                          <CalendarIcon className="ml-4 h-4 w-4 opacity-50" />
                        </Button>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <Label className="my-4">Vechicle Seat Capacity : </Label>
                  <Input
                    type="text"
                    onChange={(e) => setTotalSeats(parseInt(e.target.value))}
                    pattern="[0-9]+"
                    className="h-62 w-full rounded-xl border-b border-l-0 border-r-0 border-t-0  bg-zinc-950"
                    placeholder="Vechicle Total Seats"
                  />
                  <div className="md:flex md:w-full md:justify-center">
                    <Button
                      onClick={handleSubmit}
                      variant={"outline"}
                      className="my-4 px-16 text-black md:w-1/2 "
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default admin;
