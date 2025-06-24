import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#e5f8ff",
      100: "#b3e1ff",
      200: "#80caff",
      300: "#4db3ff",
      400: "#1a9cff",
      500: "#0085e6",
      600: "#006bb4",
      700: "#00508c",
      800: "#003d6a",
      900: "#002746",
    },
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },
});

export default theme;