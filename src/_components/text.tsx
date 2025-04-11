import clsx from "clsx";

import { Link } from "./link";

export function Text({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      data-slot="text"
      {...props}
      className={clsx(className, "text-base/6 sm:text-base/6")}
    />
  );
}

export function TextLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "decoration-foreground/50 data-hover:decoration-foreground dark:decoration-foreground/50 underline",
      )}
    />
  );
}

export function Strong({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"strong">) {
  return <strong {...props} className={clsx(className, "font-medium")} />;
}

export function Code({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"code">) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        "border-foreground/10 rounded-sm border bg-neutral-950/[2.5%] px-0.5 text-base font-medium sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5",
      )}
    />
  );
}
