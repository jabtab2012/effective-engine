import "./index.css";
import { Composition, Folder } from "remotion";
import { HostPodPromo } from "./HostPodPromo";
import { LogoReveal } from "./HostPodPromo/LogoReveal";
import { HeroTitle } from "./HostPodPromo/HeroTitle";
import { Benefits } from "./HostPodPromo/Benefits";
import { EndCard } from "./HostPodPromo/EndCard";

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
    </>
  );
};
