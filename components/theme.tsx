/* eslint-disable react/display-name */
import React, {
  HTMLAttributes,
  useCallback,
  useContext,
  useState,
} from "react";

export const symbols = {
  font: {
    base: "16px",
    _10: {
      size: rem(10),
      lineHeight: rem(13),
    },
    _12: {
      size: rem(12),
      lineHeight: rem(15),
    },
    _14: {
      size: rem(14),
      lineHeight: rem(18),
    },
    _16: {
      size: rem(16),
      lineHeight: rem(21),
    },
    paragraph: {
      size: rem(16),
      lineHeight: rem(24),
    },
    _18: {
      size: rem(18),
      lineHeight: rem(24),
    },
    _22: {
      size: rem(22),
      lineHeight: rem(28),
    },
    _26: {
      size: rem(26),
      lineHeight: rem(34),
    },
    _28: {
      size: rem(28),
      lineHeight: rem(38),
    },
  },
  media: {
    tablet: rem(650),
    desktop: rem(1024),
  },
  fontWeight: {
    _300: "300",
    _400: "400",
    _500: "500",
    _600: "600",
    _700: "700",
  },
  spacing: {
    _2: rem(2),
    _4: rem(4),
    _8: rem(8),
    _12: rem(12),
    _16: rem(16),
    _24: rem(24),
    _32: rem(32),
  },
  transition: {
    standard: "all 200ms ease",
  },
};

function rem(val: number) {
  return `${val / 16}rem`;
}

export const darkTheme = {
  background: "#000000",
  navigationBackground: "rgba(0, 0, 0, 0.7)",
  text: "#F6F6F6",
  link: "#3291ff",
  linkHover: "rgb(77, 151, 254)",
  linkTertiary: "#9CA7AD",
  border: "#222222",
  blockQuoteBackground: "transparent",
  blockQuoteBorder: "#666666",
  blockQuoteText: "#888888",
  syntaxBackground: "#141414",
  syntaxBorder: "transparent",
  syntaxPunctuation: "#F6F6F6",
  syntaxComment: "#9CA7AD",
  syntaxSelectionBg: "#9CA7AD",
  syntaxString: "#A28972",
  syntax4: "#36acaa",
  syntaxDeleted: "#9a050f",
  syntaxKeyword: "#67A1E2",
  syntaxTag: "#67A1E2",
  syntaxClassName: "#67A1E2",
  syntaxAttributeName: "#F6F6F6",
  syntaxFunction: "#67A1E2",
  syntaxHighlightLine: "rgba(193, 222, 241, 0.2)",
  syntaxLineNumberBorder: "#121212",
  toggleSlider: "#222222",
  toggleCircle: "#888888",
};

export const lightTheme: Theme = {
  background: "#FFFFFF",
  navigationBackground: "rgba(255, 255, 255, 0.7)",
  text: "#373B3F",
  link: "#2C92DD",
  linkHover: "#2A59B9",
  linkTertiary: "#9CA7AD",
  border: "#E6E6E6",
  blockQuoteBackground: "#F6F6F6",
  blockQuoteBorder: "#E6E6E6",
  blockQuoteText: "#808b91",
  syntaxBackground: "#F6F6F6",
  syntaxBorder: "#E6E6E6",
  syntaxPunctuation: "#373B3F",
  syntaxComment: "#9CA7AD",
  syntaxSelectionBg: "#9CA7AD",
  syntaxString: "#A28972",
  syntax4: "#36acaa",
  syntaxDeleted: "#9a050f",
  syntaxKeyword: "#67A1E2",
  syntaxTag: "#67A1E2",
  syntaxClassName: "#67A1E2",
  syntaxAttributeName: "#373B3F",
  syntaxFunction: "#67A1E2",
  syntaxHighlightLine: "rgba(193, 222, 241, 0.2)",
  syntaxLineNumberBorder: "#E6E6E6",
  toggleSlider: "#E6E6E6",
  toggleCircle: "#808b91",
};

/**
 * TODO: store this in local storage. Add user preference for it similar to https://overreacted.io/
 */
const hasMedia = typeof window !== "undefined" && !!window.matchMedia;

export const isDarkMode =
  false && hasMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : true;

export const defaultTheme = isDarkMode ? darkTheme : lightTheme;

export type Theme = typeof darkTheme;

const ThemeContext = React.createContext<{
  theme: Theme;
  name: "dark" | "light";
  setTheme: (theme: "light" | "dark") => void;
}>({
  name: isDarkMode ? "dark" : "light",
  theme: defaultTheme,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setTheme] = useState<"dark" | "light">(
    isDarkMode ? "dark" : "light"
  );
  const theme = name === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, name, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useSetTheme = () => useContext(ThemeContext).setTheme;
export const useTheme = () => useContext(ThemeContext).theme;
export const useThemeName = () => useContext(ThemeContext).name;
