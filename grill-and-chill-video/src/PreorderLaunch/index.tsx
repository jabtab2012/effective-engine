import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { HookA } from "./HookA";
import { HookB } from "./HookB";
import { ProductReveal } from "./ProductReveal";
import { BenefitsQuick } from "./BenefitsQuick";
import { EndCTA } from "./EndCTA";

export const PreorderLaunch: React.FC = () => {
  return (
    <AbsoluteFill name="Preorder launch" style={{ backgroundColor: "#000" }}>
      <Audio
        name="Hype music"
        src={staticFile("preorder-hype.wav")}
        volume={0.85}
      />
      <Sequence name="Hook A" durationInFrames={55} layout="none">
        <HookA />
      </Sequence>
      <Sequence name="Hook B" from={55} durationInFrames={65} layout="none">
        <HookB />
      </Sequence>
      <Sequence
        name="Product reveal"
        from={120}
        durationInFrames={120}
        layout="none"
      >
        <ProductReveal />
      </Sequence>
      <Sequence
        name="Benefits quick cuts"
        from={240}
        durationInFrames={135}
        layout="none"
      >
        <BenefitsQuick />
      </Sequence>
      <Sequence name="End CTA" from={375} durationInFrames={105} layout="none">
        <EndCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
