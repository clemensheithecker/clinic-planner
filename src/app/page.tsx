import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

import { getQueryClient } from "@/trpc/server";

import ErrorBoundary from "./_components/ErrorBoundary";
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
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Suspense fallback={<div>Loading…</div>}>
              <Test />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </HydrationBoundary>
  );
}
