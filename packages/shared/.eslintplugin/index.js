import cssConventions from "./css-conventions.js";
import noGlobalStyles from "./no-global-styles.js";
import noUselessClsx from "./no-useless-clsx.js";
import preferStylesImport from "./prefer-styles-import.js";
import preferTestingLibrary from "./prefer-testing-library.js";
import sprinklesConventions from "./sprinkles-conventions.js";

export default {
  rules: {
    "css-conventions": cssConventions,
    "no-global-styles": noGlobalStyles,
    "no-useless-clsx": noUselessClsx,
    "prefer-styles-import": preferStylesImport,
    "prefer-testing-library": preferTestingLibrary,
    "sprinkles-conventions": sprinklesConventions,
  },
};
