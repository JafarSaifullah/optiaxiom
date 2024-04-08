import { style } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { layers, theme, tokens } from "../styles";
import { mapValues } from "../utils";

export const base = style({
  "@layer": {
    [layers.reset]: {
      border: 0,
      boxSizing: "border-box",
      font: "inherit",
      fontSize: "100%",
      margin: 0,
      minWidth: 0,
      padding: 0,
      verticalAlign: "baseline",
    },
  },
});

const margins = {
  ...theme.space,
  ...mapValues(
    theme.space,
    (v) => `calc(-1 * ${v})`,
    (k) => `-${k}`,
  ),
  auto: "auto",
};

const responsiveProperties = defineProperties({
  "@layer": layers.axiom,
  conditions: {
    ...mapValues(tokens.breakpoints, (width) => ({
      "@media": `screen and (min-width: ${width})`,
    })),
    base: {},
  },
  defaultCondition: "base",
  properties: {
    display: [
      "none",
      "flex",
      "grid",
      "block",
      "inline",
      "inline-flex",
    ] as const,
    marginBottom: margins,
    marginLeft: margins,
    marginRight: margins,
    marginTop: margins,
    paddingBottom: theme.space,
    paddingLeft: theme.space,
    paddingRight: theme.space,
    paddingTop: theme.space,
  },
  shorthands: {
    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    marginX: ["marginBottom", "marginTop"],
    marginY: ["marginLeft", "marginRight"],
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
    paddingX: ["paddingBottom", "paddingTop"],
    paddingY: ["paddingLeft", "paddingRight"],
  },
});

const colorProperties = defineProperties({
  "@layer": layers.axiom,
  conditions: {
    dark: { selector: "html[class~=dark] &" },
    light: {},
  },
  defaultCondition: "light",
  properties: {
    background: theme.colors,
    color: theme.colors,
  },
});

const unresponsiveProperties = defineProperties({
  "@layer": layers.axiom,
  properties: {
    borderRadius: theme.radius,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  unresponsiveProperties,
);
export type Sprinkles = Parameters<typeof sprinkles>[0];
