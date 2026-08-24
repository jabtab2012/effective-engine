import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { headlineFont } from "../HostPodPromo/fonts";
import { Particles } from "./Particles";

export const BenefitsQuick: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Quick benefits background"
      style={{
        backgroundColor: "#0B0908",
        justifyContent: "center",
        alignItems: "center",
        padding: "260px 90px 380px 90px",
      }}
    >
      <Particles color="#F0A24E" />
      <Interactive.Div
        name="Benefit line 1"
        style={{
          position: "absolute",
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 92,
          lineHeight: 1.08,
          color: "#FFFFFF",
          textAlign: "center",
          maxWidth: 880,
          scale: interpolate(frame, [0, 6, 39, 45], [0.7, 1.06, 1, 0.85], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.back(1.5)),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [0, 5, 40, 45], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          }),
        }}
      >
        Built-in grill, fridge &amp; TV
      </Interactive.Div>
      <Interactive.Div
        name="Benefit line 2"
        style={{
          position: "absolute",
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 92,
          lineHeight: 1.08,
          color: "#F0A24E",
          textAlign: "center",
          maxWidth: 880,
          scale: interpolate(
            frame,
            [45, 51, 84, 90],
            [0.7, 1.06, 1, 0.85],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(1.5)),
              output: "perceptual-scale",
            },
          ),
          opacity: interpolate(frame, [45, 50, 85, 90], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          }),
        }}
      >
        Delivered &amp; installed for you
      </Interactive.Div>
      <Interactive.Div
        name="Benefit line 3"
        style={{
          position: "absolute",
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 92,
          lineHeight: 1.08,
          color: "#FFFFFF",
          textAlign: "center",
          maxWidth: 880,
          scale: interpolate(
            frame,
            [90, 96, 129, 135],
            [0.7, 1.06, 1, 0.85],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(1.5)),
              output: "perceptual-scale",
            },
          ),
          opacity: interpolate(frame, [90, 95, 130, 135], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          }),
        }}
      >
        Preorder pricing won't last
      </Interactive.Div>
    </AbsoluteFill>
  );
};
