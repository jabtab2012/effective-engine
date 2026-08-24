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
import { Particles } from "./Particles";

export const HookB: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill name="Hook B background" style={{ backgroundColor: "#000" }}>
      <Particles color="#FFFFFF" />
      <AbsoluteFill
        name="Hook B copy"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "260px 0px 380px 0px",
        }}
      >
        <Interactive.Div
          name="Pod photo frame"
          style={{
            width: 1080,
            height: 562,
            scale: interpolate(frame, [0, 8, 12], [0.86, 1.12, 1.08], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(2.2)),
              output: "perceptual-scale",
            }),
            translate: interpolate(
              frame,
              [0, 2, 4, 6, 8],
              ["0px 0px", "-10px 6px", "8px -4px", "-4px 2px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.linear,
              },
            ),
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
          name="Needs this text"
          style={{
            fontFamily: headlineFont,
            fontWeight: 800,
            fontSize: 116,
            color: "#FFFFFF",
            letterSpacing: "-2px",
            textAlign: "center",
            marginTop: 44,
            scale: interpolate(frame, [0, 5, 10], [0.5, 1.2, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(2.2)),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [0, 3], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.linear,
            }),
          }}
        >
          NEEDS THIS.
        </Interactive.Div>
      </AbsoluteFill>
      <AbsoluteFill
        name="Impact flash"
        style={{
          backgroundColor: "#FFFFFF",
          opacity: interpolate(frame, [0, 4], [0.9, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.quad),
          }),
        }}
      />
    </AbsoluteFill>
  );
};
