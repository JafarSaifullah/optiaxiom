import { theme } from "../styles";
import { createVar, style } from "../vanilla-extract";
import { type RecipeVariants, recipe } from "../vanilla-extract";

const accentColorVar = createVar();
const solidAccentColorVar = createVar();
const subtleAccentColorVar = createVar();

export const chip = recipe({
  base: [
    {
      alignItems: "center",
      display: "inline-flex",
      flexDirection: "row",
      gap: "4",
      justifyContent: "center",
      overflow: "hidden",
      rounded: "full",
      transition: "colors",
    },
    style({
      cursor: "pointer",
      position: "relative",
      textDecoration: "none",
      userSelect: "none",

      selectors: {
        '&:active:not([data-disabled="true"])': {
          boxShadow: theme.boxShadow.inner,
        },
        "&:focus-visible": {
          outlineOffset: "1px",
          outlineStyle: "solid",
          outlineWidth: "2px",
        },
        '&[data-disabled="true"]': {
          cursor: "not-allowed",
        },
      },
    }),
  ],
  variants: {
    colorScheme: {
      danger: style({
        vars: {
          [accentColorVar]: theme.colors["bg.error.solid"],
          [solidAccentColorVar]: theme.colors["bg.error.solid.hover"],
          [subtleAccentColorVar]: theme.colors["bg.error.subtle"],
        },

        selectors: {
          "&:focus-visible": {
            outlineColor: theme.colors["red.200"],
          },
        },
      }),
      primary: style({
        vars: {
          [accentColorVar]: theme.colors["bg.brand.solid"],
          [solidAccentColorVar]: theme.colors["bg.brand.solid.hover"],
          [subtleAccentColorVar]: theme.colors["bg.brand.subtle"],
        },

        selectors: {
          "&:focus-visible": {
            outlineColor: theme.colors["brand.300"],
          },
        },
      }),
      secondary: style({
        vars: {
          [accentColorVar]: theme.colors["fg.secondary"],
          [solidAccentColorVar]: theme.colors["fg.secondary.hover"],
          [subtleAccentColorVar]: theme.colors["bg.secondary.hover"],
        },

        selectors: {
          "&:focus-visible": {
            outlineColor: theme.colors["neutral.500"],
          },
        },
      }),
    },
    disabled: {
      false: {},
      true: {},
    },
    iconOnly: {
      false: {},
      true: {},
    },
    size: {
      sm: {
        fontSize: "sm",
        h: "sm",
      },
      md: {
        fontSize: "md",
        h: "md",
      },
      lg: {
        fontSize: "lg",
        h: "lg",
      },
    },
    variant: {
      ghost: style({
        backgroundColor: "transparent",
        borderColor: accentColorVar,
        color: accentColorVar,

        selectors: {
          '&:hover:not([data-disabled="true"])': {
            backgroundColor: subtleAccentColorVar,
          },
          '&[data-disabled="true"]': {
            backgroundColor: theme.colors["bg.disabled"],
            color: theme.colors["fg.disabled"],
          },
        },
      }),
      outline: style({
        backgroundColor: "transparent",
        border: `1px solid ${accentColorVar}`,
        color: accentColorVar,

        selectors: {
          '&:hover:not([data-disabled="true"])': {
            backgroundColor: subtleAccentColorVar,
          },
          '&[data-disabled="true"]': {
            borderColor: theme.colors["border.disabled"],
            color: theme.colors["fg.disabled"],
          },
        },
      }),
      solid: style({
        backgroundColor: accentColorVar,
        color: theme.colors["fg.default.inverse"],

        selectors: {
          '&:hover:not([data-disabled="true"])': {
            backgroundColor: solidAccentColorVar,
          },
          '&[data-disabled="true"]': {
            backgroundColor: theme.colors["bg.disabled"],
            border: `1px solid ${theme.colors["border.disabled"]}`,
            color: theme.colors["fg.disabled"],
          },
        },
      }),
    },
  },
  variantsCompounded: [
    {
      style: style({
        borderColor: theme.colors["border.default"],
      }),
      variants: {
        colorScheme: "secondary",
        variant: "outline",
      },
    },
    {
      style: {
        px: "2",
      },
      variants: {
        iconOnly: true,
        size: "sm",
      },
    },
    {
      style: {
        px: "4",
      },
      variants: {
        iconOnly: false,
        size: "sm",
      },
    },
    {
      style: {
        px: "1",
      },
      variants: {
        iconOnly: true,
        size: "sm",
        variant: "outline",
      },
    },
    {
      style: {
        px: "1",
      },
      variants: {
        disabled: true,
        iconOnly: true,
        size: "sm",
        variant: "solid",
      },
    },
    {
      style: {
        px: "3",
      },
      variants: {
        iconOnly: false,
        size: "sm",
        variant: "outline",
      },
    },
    {
      style: {
        px: "3",
      },
      variants: {
        disabled: true,
        iconOnly: false,
        size: "sm",
        variant: "solid",
      },
    },
    {
      style: {
        px: "6",
      },
      variants: {
        iconOnly: true,
        size: "md",
      },
    },
    {
      style: {
        px: "8",
      },
      variants: {
        iconOnly: false,
        size: "md",
      },
    },
    {
      style: {
        px: "5",
      },
      variants: {
        iconOnly: true,
        size: "md",
        variant: "outline",
      },
    },
    {
      style: {
        px: "5",
      },
      variants: {
        disabled: true,
        iconOnly: true,
        size: "md",
        variant: "solid",
      },
    },
    {
      style: {
        px: "7",
      },
      variants: {
        iconOnly: false,
        size: "md",
        variant: "outline",
      },
    },
    {
      style: {
        px: "7",
      },
      variants: {
        disabled: true,
        iconOnly: false,
        size: "md",
        variant: "solid",
      },
    },
    {
      style: {
        px: "10",
      },
      variants: {
        iconOnly: true,
        size: "lg",
      },
    },
    {
      style: {
        px: "12",
      },
      variants: {
        iconOnly: false,
        size: "lg",
      },
    },
    {
      style: {
        px: "9",
      },
      variants: {
        iconOnly: true,
        size: "lg",
        variant: "outline",
      },
    },
    {
      style: {
        px: "9",
      },
      variants: {
        disabled: true,
        iconOnly: true,
        size: "lg",
        variant: "solid",
      },
    },
    {
      style: {
        px: "11",
      },
      variants: {
        iconOnly: false,
        size: "lg",
        variant: "outline",
      },
    },
    {
      style: {
        px: "11",
      },
      variants: {
        disabled: true,
        iconOnly: false,
        size: "lg",
        variant: "solid",
      },
    },
  ],
});

export type ChipVariants = NonNullable<RecipeVariants<typeof chip>>;