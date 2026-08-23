import { loadFont as loadPoppins } from "@remotion/google-fonts/Poppins";

export const { fontFamily: headlineFont } = loadPoppins("normal", {
  weights: ["600", "700", "800"],
  subsets: ["latin"],
});

export const { fontFamily: headlineFontItalic } = loadPoppins("italic", {
  weights: ["600", "700"],
  subsets: ["latin"],
});
