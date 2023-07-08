import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Components/UI/table";
import Link from "next/link";

type Props = {};

const MyBooking = (props: Props) => {
  return (
    <>
      <div className="h-screen bg-zinc-950 text-white">
        <h1 className="ml-5 cursor-pointer pt-5 text-blue-500 underline">
          <Link href={"/"}>Home</Link>
        </h1>
        <div className="mb-5 flex items-center justify-center pt-10 font-extrabold">
          <h1 className="text-3xl text-slate-300">Your Booked Tickets</h1>
        </div>
        <div>
          <Table className="mt-10">
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Reference No</TableHead>
                <TableHead className="text-white">Vechicle Type</TableHead>
                <TableHead className="text-white">Route </TableHead>
                <TableHead className="text-white">Departure Time</TableHead>
                <TableHead className="text-white">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Bus</TableCell>
                <TableCell>KTM TO PKH</TableCell>
                <TableCell>1:30 AM</TableCell>
                <TableCell>$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default MyBooking;
