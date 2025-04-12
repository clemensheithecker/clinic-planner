import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient } from "@/trpc/server";

import { Test } from "./_components/Test";

export default function Home() {
  const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(
  //   trpc.hello.queryOptions({
  //     text: "Clemens",
  //   }),
  // );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex h-screen flex-col items-center justify-center">
        <main className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">Equestrian clinic planner</h1>
          <Test />
        </main>
      </div>
    </HydrationBoundary>
  );
}
