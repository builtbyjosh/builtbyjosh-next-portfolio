import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rubik";
import "@fontsource/sono";

const colorTheme = {
  colors: {
    primary: {
      default: "#baff39",
      50: "#ebffc5",
      100: "#b2f437",
      200: "#9dd730",
      300: "#84b528",
      400: "#76a224",
      500: "#63881e",
      600: "#54731a",
      700: "#435c15",
      800: "#394e11",
      900: "#29380d",
    },
    secondary: {
      default: "#6e6e6e",
      50: "#f7f7f7",
      100: "#e0e0e0",
      200: "#c5c5c5",
      300: "#a6a6a6",
      400: "#949494",
      500: "#7d7d7d",
      600: "#696969",
      700: "#545454",
      800: "#474747",
      900: "#333333",
    },
    neutral: {
      default: "#626262",
      900: "#000000",
      800: "#252736",
      700: "#363642",
      600: "#545454",
      500: "#626262",
      400: "#727272",
      300: "#767676",
      200: "#BFBFBF",
      100: "#DEDEDE",
      50: "#FFFFFF",
    },
  },
};

const theme = extendTheme({
  colors: { ...colorTheme.colors },
  fonts: {
    heading: "Sono",
    body: "Rubik",
  },
  styles: {
    global: (props) => ({
      body: {
        "overscroll-behavior-y": "contain",
        bg: colorTheme.colors.secondary[500],
      },
    }),
  },

  components: {
    Input: {
      defaultProps: {
        focusBorderColor: colorTheme.colors.primary[100],
        errorBorderColor: "red.300",
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: colorTheme.colors.primary[100],
      },
    },
    FormLabel: {
      baseStyle: {
        fontWeight: "500",
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "800",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "400",
      },
    },
    Menu: {
      baseStyle: {
        item: {
          fontSize: "14px",
        },
      },
    },
  },
});
export default theme;
