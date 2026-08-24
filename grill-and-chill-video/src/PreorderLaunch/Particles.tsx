import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

const PARTICLES = [
  { x: 12, size: 10, delay: 0, duration: 70, drift: -30 },
  { x: 26, size: 16, delay: 8, duration: 85, drift: 20 },
  { x: 41, size: 8, delay: 18, duration: 65, drift: -15 },
  { x: 55, size: 20, delay: 4, duration: 95, drift: 35 },
  { x: 68, size: 12, delay: 26, duration: 75, drift: -25 },
  { x: 79, size: 9, delay: 12, duration: 68, drift: 15 },
  { x: 88, size: 18, delay: 20, duration: 90, drift: -20 },
  { x: 34, size: 14, delay: 34, duration: 80, drift: 25 },
  { x: 60, size: 11, delay: 40, duration: 72, drift: -30 },
  { x: 20, size: 15, delay: 46, duration: 88, drift: 18 },
];

export const Particles: React.FC<{ color: string }> = ({ color }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill name="Ember particles" style={{ overflow: "hidden" }}>
      {PARTICLES.map((p, i) => {
        const local = frame - p.delay;
        const cycle = local >= 0 ? local % p.duration : p.duration + local;
        const progress = cycle / p.duration;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              bottom: 0,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: color,
              filter: "blur(1px)",
              opacity: interpolate(
                progress,
                [0, 0.15, 0.8, 1],
                [0, 0.85, 0.5, 0],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.linear,
                },
              ),
              translate: `${interpolate(progress, [0, 1], [0, p.drift], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })}px ${interpolate(progress, [0, 1], [0, -900], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.quad),
              })}px`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
