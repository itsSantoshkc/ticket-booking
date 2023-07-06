import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "axios  @tanstack/react-query/server/api/trpc";

export const bookingRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.booking.findUnique({
      where: {
        bookingReference: "1",
      },
    });
  }),

  goodbye: publicProcedure
    .input(z.object({ message: z.string() }))
    .query(({ input }) => {
      return {
        message: input.message,
      };
    }),
});
