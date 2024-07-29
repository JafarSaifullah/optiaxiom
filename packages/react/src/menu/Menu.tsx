import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";

import type { BoxProps } from "../box";

import { Flex } from "../flex";

type MenuProps = BoxProps<typeof RadixMenu.Root>;

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, ...props }, ref) => {
    return (
      <Flex alignItems="center" asChild ref={ref} {...props}>
        <RadixMenu.Root>{children}</RadixMenu.Root>
      </Flex>
    );
  },
);

Menu.displayName = "@optiaxiom/react/Menu";