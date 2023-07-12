import type { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
type addNewVechicleArgument = {
  ctx: ctx;
  input: Vechicle;
};
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
  const addVechicle = await ctx.prisma.vechicle.create({
    data: {
      vechicleType: input.vechicleType,
      vechicleDescription: input.vechicleDescription,
      vechicleRegNo: input.vechicleRegNo,
      departure: input.departure,
      routeFrom: input.routeFrom,
      routeTo: input.routeTo,
      totalSeats: input.totalSeats,
    },
  });
  return addVechicle;
};

export const getVechicleById = async ({
  ctx,
  input,
}: {
  ctx: ctx;
  input: { id: number };
}) => {
  const vechicleDetail = await ctx.prisma.vechicle.findUnique({
    where: {
      id: input.id,
    },
  });

  if (vechicleDetail === null) {
    throw new TRPCError({ code: "NOT_FOUND" });
  }

  return vechicleDetail;
};

export const getVechicle = async ({
  ctx,
  input,
}: {
  ctx: ctx;
  input: {
    start: number;
    count: number;
  };
}) => {
  const vechicleDetails = await ctx.prisma.vechicle.findMany({
    skip: input.start,
    take: input.count,
  });

  return vechicleDetails;
};
