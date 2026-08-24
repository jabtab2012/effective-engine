import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { headlineFont, headlineFontItalic } from "./fonts";

export const HeroTitle: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill name="Hero background" style={{ backgroundColor: "#0B0908" }}>
      <AbsoluteFill
        name="Hero copy"
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          opacity: interpolate(frame, [0, 12, 168, 180], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Pod photo frame"
          style={{
            alignSelf: "stretch",
            height: 562,
            scale: interpolate(frame, [0, 180], [1, 1.035], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.linear,
              output: "perceptual-scale",
            }),
          }}
        >
          <Img
            src={staticFile("hero.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Interactive.Div>
        <Interactive.Div
          name="Product name"
          style={{
            fontFamily: headlineFont,
            fontWeight: 800,
            fontSize: 92,
            lineHeight: 1.02,
            color: "#FFFFFF",
            letterSpacing: "-1px",
            marginTop: 44,
            marginLeft: 80,
            opacity: interpolate(frame, [10, 24], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(frame, [10, 26], ["0px 32px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          THE ENTERTAINER
        </Interactive.Div>
        <Interactive.Div
          name="Tagline"
          style={{
            fontFamily: headlineFontItalic,
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: 50,
            marginTop: 20,
            marginLeft: 80,
            color: "#F0A24E",
            opacity: interpolate(frame, [32, 46], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(frame, [32, 48], ["0px 24px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          "Invite the neighborhood!"
        </Interactive.Div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
