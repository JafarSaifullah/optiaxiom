import * as RadixTooltip from "@radix-ui/react-tooltip";
import { AnimatePresence } from "framer-motion";
import {
  type ComponentPropsWithRef,
  type ReactNode,
  forwardRef,
  useState,
} from "react";

import { Box } from "../box";
import { Text } from "../text";
import { Transition } from "../transition";

type TooltipProps = {
  children: ReactNode;
  content?: ReactNode;
  withArrow?: boolean;
} & ComponentPropsWithRef<typeof RadixTooltip.Content>;

export const Tooltip = forwardRef<HTMLButtonElement, TooltipProps>(
  ({ children, content, withArrow, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <RadixTooltip.Provider>
        <RadixTooltip.Root onOpenChange={setOpen} open={open}>
          <RadixTooltip.Trigger asChild ref={ref}>
            {children}
          </RadixTooltip.Trigger>

          <AnimatePresence>
            {open && (
              <RadixTooltip.Portal forceMount>
                <Transition type="pop">
                  <RadixTooltip.Content asChild sideOffset={5} {...props}>
                    <Box
                      background="dark.600"
                      borderRadius="sm"
                      color="white"
                      paddingX={0.75}
                      paddingY={0.5}
                    >
                      <Text size="sm">{content}</Text>
                      {withArrow && <RadixTooltip.Arrow />}
                    </Box>
                  </RadixTooltip.Content>
                </Transition>
              </RadixTooltip.Portal>
            )}
          </AnimatePresence>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    );
  },
);

Tooltip.displayName = "@optiaxiom/react/Tooltip";