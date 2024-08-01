import { forwardRef } from "react";

import { Box, type BoxProps } from "../box";
import { Button } from "../button";
import { Flex } from "../flex";
import { IconDanger } from "../icons/IconDanger";
import { IconInfoCircle } from "../icons/IconInfoCircle";
import { IconSuccess } from "../icons/IconSuccess";
import { IconWarning } from "../icons/IconWarning";
import { IconX } from "../icons/IconX";
import * as styles from "./Alert.css";

type AlertProps = BoxProps<
  "div",
  {
    onClose?: () => void;
  } & styles.AlertVariants
>;

const iconMap = new Map([
  ["danger", IconDanger],
  ["info", IconInfoCircle],
  ["success", IconSuccess],
  ["warning", IconWarning],
]);

const getIcon = (type: string) => {
  const IconComponent = iconMap.get(type);
  return IconComponent ? <IconComponent /> : null;
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, onClose, size = "md", title, type = "info", ...props }, ref) => {
    return (
      <Flex ref={ref} {...styles.alert({ size, type })} {...props}>
        <Box asChild {...styles.startDecorator()}>
          {getIcon(type)}
        </Box>
        <Flex {...styles.content()}>{children}</Flex>
        <Box {...styles.close()}>
          <Button
            appearance="secondary"
            color={type == "warning" ? "fg.default" : "white"}
            h="16"
            icon={<IconX />}
            onClick={onClose}
            p="0"
          />
        </Box>
      </Flex>
    );
  },
);

Alert.displayName = "@optiaxiom/react/Alert";