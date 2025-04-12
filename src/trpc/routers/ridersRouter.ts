import { loadAllRidersProcedure } from "@/server/procedures/riders/loadAllRidersProcedure";

import { createTRPCRouter } from "../init";

export const ridersRouter = createTRPCRouter({
  loadAll: loadAllRidersProcedure,
});
