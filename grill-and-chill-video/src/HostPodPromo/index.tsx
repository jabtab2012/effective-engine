import { AbsoluteFill, Sequence } from "remotion";
import { LogoReveal } from "./LogoReveal";
import { HeroTitle } from "./HeroTitle";
import { Benefits } from "./Benefits";
import { EndCard } from "./EndCard";

export const HostPodPromo: React.FC = () => {
  return (
    <AbsoluteFill name="Host pod promo" style={{ backgroundColor: "#000" }}>
      <Sequence name="Logo reveal" durationInFrames={90} layout="none">
        <LogoReveal />
      </Sequence>
      <Sequence
        name="Hero title"
        from={90}
        durationInFrames={180}
        layout="none"
      >
        <HeroTitle />
      </Sequence>
      <Sequence
        name="Benefits"
        from={270}
        durationInFrames={120}
        layout="none"
      >
        <Benefits />
      </Sequence>
      <Sequence name="End card" from={390} durationInFrames={60} layout="none">
        <EndCard />
      </Sequence>
    </AbsoluteFill>
  );
};
