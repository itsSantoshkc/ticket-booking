import { createTRPCRouter } from "axios  @tanstack/react-query/server/api/trpc";
import { bookingRouter } from "./routers/booking";
import { vechicleRouter } from "./routers/Vechicle";
import { userRouter } from "./routers/User";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  Booking: bookingRouter,
  Vechicle: vechicleRouter,
  User: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
