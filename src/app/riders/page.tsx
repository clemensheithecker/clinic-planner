import { PlusIcon } from "@heroicons/react/16/solid";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

import { Button, Heading } from "@/_components/ui";
import { getQueryClient, trpc } from "@/trpc/server";

import ErrorBoundary from "../_components/ErrorBoundary";
import { RidersTable } from "./_components/riders-table";

export default async function RidersPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.riders.loadAll.queryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex min-h-screen flex-col items-start justify-start gap-6 px-4 py-8 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <div className="flex w-full items-center justify-between gap-2">
          <Heading>Reitende</Heading>
          <Button>
            <PlusIcon className="mr-2 size-4" />
            Hinzufügen
          </Button>
        </div>
        <main className="bg-background row-start-2 flex w-full flex-col items-center gap-[32px] rounded-2xl px-4 py-6 shadow-sm sm:items-start sm:p-4">
          <Suspense fallback={<div>Laden…</div>}>
            <ErrorBoundary>
              <RidersTable />
            </ErrorBoundary>
          </Suspense>
        </main>
      </div>
    </HydrationBoundary>
  );
}
