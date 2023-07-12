import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  adminProcedure,
} from "axios  @tanstack/react-query/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { addNewVechicle } from "./QueryFunctions/VechicleQuery";

export const vechicleRouter = createTRPCRouter({
  addVechicle: adminProcedure
    .input(
      z.object({
        vechicleType: z.string(),
        vechicleRegNo: z.number(),
        vechicleDescription: z.string(),
        routeFrom: z.string(),
        routeTo: z.string(),
        price: z.number(),
        departure: z.date(),
        totalSeats: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      addNewVechicle({ ctx, input });
    }),
  //   getAll: publicProcedure.query(({ ctx }) => {
  //     return ctx.prisma.booking.findUnique({
  //       where: {
  //         bookingReference: "1",
  //       },
  //     });
  //   }),

  getAllVechicle: publicProcedure.query(({ ctx }) => {
    const vechiclesDetails = ctx.prisma.vechicle.findMany();
    console.log(vechiclesDetails);
  }),
});
