import { RIDER_QUERY_REPOSITORY } from "@/database/queries/riderQueryRepository";
import { publicProcedure } from "@/trpc/procedures";

export const loadAllRidersProcedure = publicProcedure.query(async ({ ctx }) => {
  console.log("loadAllRidersProcedure", { ctx });

  const riders = await RIDER_QUERY_REPOSITORY.findAll();

  return riders;
});
