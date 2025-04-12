"use client";

import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

export const Test = () => {
  const trpc = useTRPC();

  const greeting = useQuery(trpc.hello.queryOptions({ text: "world" }));

  if (!greeting.data) return <div>Loading…</div>;

  return <div>{greeting.data.greeting}</div>;
};
