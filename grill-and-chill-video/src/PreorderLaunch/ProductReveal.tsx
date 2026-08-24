import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { headlineFont } from "../HostPodPromo/fonts";

export const ProductReveal: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill name="Product reveal background">
      <Img
        src={staticFile("hero.jpg")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 60%",
          scale: interpolate(frame, [0, 120], [1.2, 1.32], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
            output: "perceptual-scale",
          }),
        }}
      />
      <AbsoluteFill
        name="Bottom gradient scrim"
        style={{
          background:
            "linear-gradient(to top, rgba(8,6,5,0.95) 0%, rgba(8,6,5,0.6) 34%, rgba(8,6,5,0.05) 60%)",
        }}
      />
      <AbsoluteFill
        name="Reveal copy"
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "0 90px 380px 90px",
        }}
      >
        <Interactive.Div
          name="Preorder badge"
          style={{
            fontFamily: headlineFont,
            fontWeight: 800,
            fontSize: 40,
            color: "#0B0908",
            backgroundColor: "#F15E22",
            padding: "14px 28px",
            borderRadius: 999,
            letterSpacing: "1px",
            marginBottom: 28,
            rotate: interpolate(
              frame,
              [0, 14, 22],
              ["-8deg", "3deg", "-4deg"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.back(3)),
              },
            ),
            scale: interpolate(frame, [0, 14, 22], [0.3, 1.15, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(3)),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [0, 6], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.linear,
            }),
          }}
        >
          PREORDER LAUNCH
        </Interactive.Div>
        <Interactive.Div
          name="Product name"
          style={{
            fontFamily: headlineFont,
            fontWeight: 800,
            fontSize: 96,
            lineHeight: 1.0,
            color: "#FFFFFF",
            letterSpacing: "-1px",
            opacity: interpolate(frame, [20, 32], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(frame, [20, 34], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          THE ENTERTAINER
        </Interactive.Div>
        <Interactive.Div
          name="Reveal subtext"
          style={{
            fontFamily: headlineFont,
            fontWeight: 600,
            fontSize: 44,
            color: "#F15E22",
            marginTop: 18,
            opacity: interpolate(frame, [40, 52], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          Be first. Reserve yours.
        </Interactive.Div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
