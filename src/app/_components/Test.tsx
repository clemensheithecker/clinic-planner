"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

export const Test = () => {
  const trpc = useTRPC();

  const { data } = useSuspenseQuery(trpc.hello.queryOptions({ text: "world" }));

  return <div>{data.greeting}</div>;
};
