import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { headlineFont } from "../HostPodPromo/fonts";
import { Particles } from "./Particles";

export const HookA: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Hook A background"
      style={{
        backgroundColor: "#0B0908",
        justifyContent: "center",
        alignItems: "center",
        padding: "260px 90px 380px 90px",
      }}
    >
      <Particles color="#F0A24E" />
      <AbsoluteFill
        name="Hook A copy"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "260px 90px 380px 90px",
        }}
      >
        <Interactive.Div
          name="Word: Your"
          style={{
            fontFamily: headlineFont,
            fontWeight: 800,
            fontSize: 110,
            color: "#FFFFFF",
            letterSpacing: "-1px",
            scale: interpolate(frame, [0, 10, 16], [0.6, 1.15, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(2)),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [0, 6], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.linear,
            }),
          }}
        >
          YOUR
        </Interactive.Div>
        <Interactive.Div
          name="Word: Backyard"
          style={{
            fontFamily: headlineFont,
            fontWeight: 800,
            fontSize: 128,
            color: "#F0A24E",
            letterSpacing: "-2px",
            marginTop: 4,
            scale: interpolate(frame, [16, 26, 32], [0.6, 1.15, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(2)),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [16, 22], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.linear,
            }),
          }}
        >
          BACKYARD
        </Interactive.Div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
