import clsx from "clsx";

import { Link } from "./link";

export const Text = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) => (
  <p
    data-slot="text"
    {...props}
    className={clsx(className, "text-base/6 sm:text-base/6")}
  />
);

export const TextLink = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) => (
  <Link
    {...props}
    className={clsx(
      className,
      "decoration-foreground/50 data-hover:decoration-foreground dark:decoration-foreground/50 underline",
    )}
  />
);

export const Strong = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"strong">) => (
  <strong {...props} className={clsx(className, "font-medium")} />
);

export const Code = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"code">) => (
  <code
    {...props}
    className={clsx(
      className,
      "border-foreground/10 rounded-sm border bg-neutral-950/[2.5%] px-0.5 text-base font-medium sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5",
    )}
  />
);
