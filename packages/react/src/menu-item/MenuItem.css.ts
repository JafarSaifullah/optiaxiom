import { theme } from "../styles";
import { recipe, style } from "../vanilla-extract";

export const item = recipe({
  base: [
    {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      fontSize: "md",
      h: "40",
      justifyContent: "start",
      px: "xs",
      rounded: "sm",
    },
    style({
      selectors: {
        "&:active:not([data-disabled])": {
          backgroundColor: theme.colors["neutral.200"],
        },
        "&:focus-visible": {
          outline: `1px solid ${theme.colors["outline.brand"]}`,
        },
        "&:hover:not([data-disabled])": {
          backgroundColor: theme.colors["bg.neutral.solid.hover"],
        },
        "[data-disabled] &": {
          backgroundColor: theme.colors["white"],
          border: `1px solid ${theme.colors["border.disabled"]}`,
          color: theme.colors["fg.disabled"],
        },
      },
    }),
  ],
});

export const decorator = recipe({
  base: [
    {
      alignItems: "center",
      justifyContent: "center",
      size: "xs",
    },
    style({
      selectors: {
        "&[data-disabled]": {
          color: theme.colors["red.300"],
        },
      },
    }),
  ],
  variants: {
    position: {
      end: {
        mr: "0",
      },
      start: {
        ml: "0",
      },
    },
  },
});
