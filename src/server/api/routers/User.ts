import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  adminProcedure,
} from "axios  @tanstack/react-query/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { contextProps } from "@trpc/react-query/shared";
import { getUserById } from "./QueryFunctions/UserQueries";

export const userRouter = createTRPCRouter({
  getUserById: adminProcedure.query(getUserById),

  goodbye: publicProcedure
    .input(z.object({ message: z.string() }))
    .query(({ input }) => {
      return {
        message: input.message,
      };
    }),
});
