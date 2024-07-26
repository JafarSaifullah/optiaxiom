import { theme } from "../styles";
import {
  type RecipeVariants,
  createVar,
  keyframes,
  recipe,
  style,
} from "../vanilla-extract";

const accentColorVar = createVar();
const swipeEndVar = createVar();

const fadeOut = keyframes({
  from: {
    opacity: "1",
  },
});
const slideIn = keyframes({
  from: {
    translate: swipeEndVar,
  },
  to: {
    translate: "0",
  },
});
const swipeOut = keyframes({
  from: {
    opacity: "1",
    translate: "var(--radix-toast-swipe-end-x) var(--radix-toast-swipe-end-y)",
  },
  to: {
    translate: swipeEndVar,
  },
});

export const root = recipe({
  base: [
    {
      alignItems: "center",
      borderL: "4",
      display: "flex",
      gap: "10",
      p: "16",
      pr: "10",
      rounded: "sm",
    },
    style({
      borderColor: accentColorVar,

      selectors: {
        '&[data-state="closed"]': {
          animation: `${fadeOut} 100ms ease-in`,
          opacity: "0",
        },
        '&[data-state="open"]': {
          animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-swipe="cancel"]': {
          transition: "translate 150ms ease",
          translate: "0",
        },
        '&[data-swipe="end"]': {
          animation: `${swipeOut} 100ms ease-out`,
          opacity: "0",
        },
        '&[data-swipe="move"]': {
          translate:
            "var(--radix-toast-swipe-move-x) var(--radix-toast-swipe-move-y)",
        },
        '&[data-swipe-direction="down"]': {
          vars: {
            [swipeEndVar]: "0 calc(100% + 24px)",
          },
        },
        '&[data-swipe-direction="left"]': {
          vars: {
            [swipeEndVar]: "calc(-100% - 24px) 0",
          },
        },
        '&[data-swipe-direction="right"]': {
          vars: {
            [swipeEndVar]: "calc(100% + 24px) 0",
          },
        },
        '&[data-swipe-direction="up"]': {
          vars: {
            [swipeEndVar]: "0 calc(-100% - 24px)",
          },
        },
        '[data-position^="bottom"] &:first-child': {
          marginTop: "auto",
        },
        '[data-position^="top"] &:last-child': {
          marginBottom: "auto",
        },
      },
    }),
  ],
  variants: {
    colorScheme: {
      brand: style({
        vars: {
          [accentColorVar]: theme.colors["border.brand"],
        },
      }),
      danger: style({
        vars: {
          [accentColorVar]: theme.colors["border.error"],
        },
      }),
      neutral: style({
        vars: {
          [accentColorVar]: theme.colors["border.active"],
        },
      }),
      success: style({
        vars: {
          [accentColorVar]: theme.colors["border.success"],
        },
      }),
      warning: style({
        vars: {
          [accentColorVar]: theme.colors["border.warning"],
        },
      }),
    },
  },
});

export const icon = recipe({
  base: [
    {
      mt: "4",
      size: "16",
    },
    style({
      alignSelf: "start",
      color: accentColorVar,
    }),
  ],
});

export type RootVariants = RecipeVariants<typeof root>;