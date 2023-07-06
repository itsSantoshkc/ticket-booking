import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/UI/card";

type Props = {};

const BookCard = (props: Props) => {
  return (
    <Card className="flex">
      <CardHeader>
        <CardTitle>Bus 101</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default BookCard;
