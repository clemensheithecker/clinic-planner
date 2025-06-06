/**
 * TODO: Update this component to use your client-side framework's link
 * component. We've provided examples of how to do this for Next.js, Remix, and
 * Inertia.js in the Catalyst documentation:
 *
 * https://catalyst.tailwindui.com/docs#client-side-router-integration
 */

import { forwardRef } from "react";

export const Link = forwardRef(
  (
    props: { href: string } & React.ComponentPropsWithoutRef<"a">,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => <a {...props} ref={ref} />,
);

Link.displayName = "Link";
