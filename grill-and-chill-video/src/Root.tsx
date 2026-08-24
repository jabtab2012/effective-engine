import "./index.css";
import { Composition, Folder } from "remotion";
import { HostPodPromo } from "./HostPodPromo";
import { LogoReveal } from "./HostPodPromo/LogoReveal";
import { HeroTitle } from "./HostPodPromo/HeroTitle";
import { Benefits } from "./HostPodPromo/Benefits";
import { EndCard } from "./HostPodPromo/EndCard";
import { PreorderLaunch } from "./PreorderLaunch";
import { HookA } from "./PreorderLaunch/HookA";
import { HookB } from "./PreorderLaunch/HookB";
import { ProductReveal } from "./PreorderLaunch/ProductReveal";
import { BenefitsQuick } from "./PreorderLaunch/BenefitsQuick";
import { EndCTA } from "./PreorderLaunch/EndCTA";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HostPodPromo"
        component={HostPodPromo}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Folder name="HostPodPromo-Scenes">
        <Composition
          id="HostPodPromo-LogoReveal"
          component={LogoReveal}
          durationInFrames={90}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="HostPodPromo-HeroTitle"
          component={HeroTitle}
          durationInFrames={180}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="HostPodPromo-Benefits"
          component={Benefits}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="HostPodPromo-EndCard"
          component={EndCard}
          durationInFrames={60}
          fps={30}
          width={1080}
          height={1920}
        />
      </Folder>
      <Composition
        id="PreorderLaunch"
        component={PreorderLaunch}
        durationInFrames={480}
        fps={30}
        width={1080}
        height={1920}
      />
      <Folder name="PreorderLaunch-Scenes">
        <Composition
          id="PreorderLaunch-HookA"
          component={HookA}
          durationInFrames={55}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="PreorderLaunch-HookB"
          component={HookB}
          durationInFrames={65}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="PreorderLaunch-ProductReveal"
          component={ProductReveal}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="PreorderLaunch-BenefitsQuick"
          component={BenefitsQuick}
          durationInFrames={135}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="PreorderLaunch-EndCTA"
          component={EndCTA}
          durationInFrames={105}
          fps={30}
          width={1080}
          height={1920}
        />
      </Folder>
    </>
  );
};
