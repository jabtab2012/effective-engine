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

export const EndCTA: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="End CTA background"
      style={{
        backgroundColor: "#FAF6F0",
        justifyContent: "center",
        alignItems: "center",
        padding: "260px 90px 380px 90px",
      }}
    >
      <Interactive.Div name="Logo mark" style={{ width: 620 }}>
        <Img
          src={staticFile("logo-wordmark.png")}
          style={{
            width: "100%",
            display: "block",
            opacity: interpolate(frame, [0, 8], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.linear,
            }),
            scale: interpolate(frame, [0, 14], [0.85, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(2)),
              output: "perceptual-scale",
            }),
          }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Preorder stamp"
        style={{
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 48,
          color: "#0B0908",
          backgroundColor: "#F15E22",
          padding: "18px 36px",
          borderRadius: 999,
          letterSpacing: "1px",
          marginTop: 40,
          rotate: interpolate(
            frame,
            [12, 26, 34],
            ["-6deg", "4deg", "-2deg"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(3)),
            },
          ),
          scale: interpolate(frame, [12, 26, 34], [0.3, 1.15, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.back(3)),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [12, 18], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          }),
        }}
      >
        PREORDER LAUNCH
      </Interactive.Div>
      <Interactive.Div
        name="CTA headline"
        style={{
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 72,
          color: "#161311",
          textAlign: "center",
          marginTop: 34,
          letterSpacing: "-1px",
          opacity: interpolate(frame, [34, 46], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [34, 48], ["0px 24px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Reserve yours today
      </Interactive.Div>
      <Interactive.Div
        name="Link in bio"
        style={{
          fontFamily: headlineFont,
          fontWeight: 700,
          fontSize: 40,
          color: "#F15E22",
          marginTop: 22,
          opacity: interpolate(frame, [52, 62], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          }),
          scale: interpolate(
            frame,
            [52, 62, 70, 78, 86, 90],
            [0.9, 1.06, 1, 1.06, 1, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.ease),
              output: "perceptual-scale",
            },
          ),
        }}
      >
        Link in bio ↑
      </Interactive.Div>
    </AbsoluteFill>
  );
};
