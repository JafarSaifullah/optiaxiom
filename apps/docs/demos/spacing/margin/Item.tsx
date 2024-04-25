import { Box, Text, theme } from "@optiaxiom/react";
import { type ComponentPropsWithRef, type ReactElement } from "react";

export const Item = ({
  children,
  padding,
}: {
  children: ReactElement<ComponentPropsWithRef<typeof Box>>;
  padding?: ComponentPropsWithRef<typeof Box>["padding"];
}) => {
  return (
    <Box
      borderRadius="sm"
      padding={padding}
      style={{
        background: `rgb(from ${theme.color["purple.500"]} r g b / 30%)`,
      }}
    >
      <Box
        background="purple.500"
        borderRadius="inherit"
        padding="sm"
        {...children.props}
      >
        <Text color="white" fontFamily="mono" fontWeight={600}>
          {children.props.children}
        </Text>
      </Box>
    </Box>
  );
};