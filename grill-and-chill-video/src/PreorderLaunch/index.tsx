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
      <Sequence name="Hook A" durationInFrames={70} layout="none">
        <HookA />
      </Sequence>
      <Sequence name="Hook B" from={70} durationInFrames={80} layout="none">
        <HookB />
      </Sequence>
      <Sequence
        name="Product reveal"
        from={150}
        durationInFrames={120}
        layout="none"
      >
        <ProductReveal />
      </Sequence>
      <Sequence
        name="Benefits quick cuts"
        from={270}
        durationInFrames={135}
        layout="none"
      >
        <BenefitsQuick />
      </Sequence>
      <Sequence name="End CTA" from={405} durationInFrames={105} layout="none">
        <EndCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
