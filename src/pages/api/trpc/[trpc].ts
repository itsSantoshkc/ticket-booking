import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "axios  @tanstack/react-query/env.mjs";
import { appRouter } from "axios  @tanstack/react-query/server/api/root";
import { createTRPCContext } from "axios  @tanstack/react-query/server/api/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
