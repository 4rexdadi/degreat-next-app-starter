// Imports
import { FC } from "react";

// Imports Styles
import { VideoSectionContainer } from "./VideoSectionStyle";

interface VideoSectionProps {}

const VideoSection: FC<VideoSectionProps> = ({}) => {
  return (
    <VideoSectionContainer>
      <video loop autoPlay src="/assets/video/vid.mp4" />
    </VideoSectionContainer>
  );
};

export default VideoSection;
