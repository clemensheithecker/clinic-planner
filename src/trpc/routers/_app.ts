import { z } from "zod";

import { createTRPCRouter } from "../init";
import { publicProcedure } from "../procedures";
import { invitationsRouter } from "./invitationsRouter";

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
});

export type AppRouter = typeof appRouter;
