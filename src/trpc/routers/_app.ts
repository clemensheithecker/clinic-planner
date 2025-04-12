import { z } from "zod";

import { createTRPCRouter } from "../init";
import { publicProcedure } from "../procedures";
import { invitationsRouter } from "./invitationsRouter";
import { ridersRouter } from "./ridersRouter";

export const appRouter = createTRPCRouter({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `Hello ${opts.input.text}!`,
      };
    }),
  invitations: invitationsRouter,
  riders: ridersRouter,
});

export type AppRouter = typeof appRouter;
