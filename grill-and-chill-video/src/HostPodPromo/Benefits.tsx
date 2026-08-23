import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { headlineFont } from "./fonts";

export const Benefits: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Benefits background"
      style={{
        backgroundColor: "#161311",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0 80px",
        opacity: interpolate(frame, [0, 10, 110, 120], [0, 1, 1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <Interactive.Div
        name="Benefit 1"
        style={{
          fontFamily: headlineFont,
          fontWeight: 700,
          fontSize: 60,
          lineHeight: 1.15,
          color: "#FFFFFF",
          marginBottom: 56,
          opacity: interpolate(frame, [4, 18], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [4, 20], ["-60px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Built-in grill, fridge,
        <br />
        TV &amp; bar
      </Interactive.Div>
      <Interactive.Div
        name="Benefit 2"
        style={{
          fontFamily: headlineFont,
          fontWeight: 700,
          fontSize: 60,
          lineHeight: 1.15,
          color: "#F0A24E",
          marginBottom: 56,
          opacity: interpolate(frame, [34, 48], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [34, 50], ["-60px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        No permits. No contractors.
        <br />
        No hassle.
      </Interactive.Div>
      <Interactive.Div
        name="Dimensions"
        style={{
          fontFamily: headlineFont,
          fontWeight: 600,
          fontSize: 40,
          color: "#B8B0A6",
          opacity: interpolate(frame, [64, 78], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [64, 80], ["-60px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        12' W × 3' D × 7.75' H
      </Interactive.Div>
    </AbsoluteFill>
  );
};
