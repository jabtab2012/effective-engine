import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const LogoReveal: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Logo reveal background"
      style={{
        backgroundColor: "#FAF6F0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Interactive.Div
        name="Logo mark"
        style={{
          width: 700,
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [0, 20], [0.82, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
        }}
      >
        <Img
          src={staticFile("logo.png")}
          style={{ width: "100%", display: "block" }}
        />
      </Interactive.Div>
    </AbsoluteFill>
  );
};
