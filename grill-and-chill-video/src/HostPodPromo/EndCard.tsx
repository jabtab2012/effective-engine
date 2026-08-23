import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { headlineFont } from "./fonts";

export const EndCard: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="End card background"
      style={{
        backgroundColor: "#FAF6F0",
        justifyContent: "center",
        alignItems: "center",
        opacity: interpolate(frame, [0, 8], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <Interactive.Div name="Logo mark" style={{ width: 420 }}>
        <Img
          src={staticFile("logo.png")}
          style={{ width: "100%", display: "block" }}
        />
      </Interactive.Div>
      <Interactive.Div
        name="Price"
        style={{
          fontFamily: headlineFont,
          fontWeight: 800,
          fontSize: 108,
          color: "#161311",
          marginTop: 36,
          letterSpacing: "-2px",
          scale: interpolate(frame, [10, 26], [0.85, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [10, 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        $24,500
      </Interactive.Div>
      <Interactive.Div
        name="Brand line"
        style={{
          fontFamily: headlineFont,
          fontWeight: 600,
          fontSize: 44,
          color: "#F0A24E",
          marginTop: 20,
          textAlign: "center",
          maxWidth: 820,
          opacity: interpolate(frame, [28, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        We craft the stage. You become the host.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
