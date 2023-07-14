import { vechicleRouter } from "./../Vechicle";
import type { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
import * as fs from "fs";
import { Vegan } from "lucide-react";

type addNewVechicleArgument = { ctx: ctx; input: Vechicle };
type ctx = {
  userId: string | null;
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined,
    DefaultArgs
  >;
};
type Vechicle = {
  vechicleType: string;
  vechicleRegNo: number;
  vechicleDescription: string;
  routeFrom: string;
  routeTo: string;
  price: number;
  departure: Date;
  totalSeats: number;
};
export const addNewVechicle = async ({
  ctx,
  input,
}: addNewVechicleArgument) => {
  fs.readFile("public/images.json", async (err, data) => {
    if (err) {
      console.log(err);
    }
    const parsedData = await JSON.parse(data.toString());
    const vechicleType = await input.vechicleType.toUpperCase();
    const image = input.vechicleRegNo % 3;

    const addVechicle = await ctx.prisma.vechicle.create({
      data: {
        image: parsedData[vechicleType][image],
        vechicleType: input.vechicleType,
        vechicleDescription: input.vechicleDescription,
        vechicleRegNo: input.vechicleRegNo,
        departure: input.departure,
        routeFrom: input.routeFrom,
        routeTo: input.routeTo,
        price: input.price,
        totalSeats: input.totalSeats,
      },
    });
    return addVechicle;
  });
};
export const getVechicleById = async ({
  ctx,
  input,
}: {
  ctx: ctx;
  input: { id: string };
}) => {
  const vechicleDetail = await ctx.prisma.vechicle.findUnique({
    where: { id: input.id },
  });

  return vechicleDetail;
};
export const getVechicles = async ({
  ctx,
  input,
}: {
  ctx: ctx;
  input: { count: number };
}) => {
  const vechicleDetails = await ctx.prisma.vechicle.findMany({
    skip: input.count - 20,
    take: input.count,
  });
  return vechicleDetails;
};
export const getVechicleByType = async ({
  ctx,
  input,
}: {
  ctx: ctx;
  input: { type: string };
}) => {
  const vechicleByType = await ctx.prisma.vechicle.findMany({
    where: {
      vechicleType: input.type,
    },
  });
  return vechicleByType;
};
