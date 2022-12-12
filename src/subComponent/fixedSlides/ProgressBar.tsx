// Imports
import { FC } from "react";

// Imports Styles
import { ProgressBarContainer } from "./fixedSlidesStyle";

interface ProgressBarProps {
  progress: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarContainer
      className={"ProgressBar"}
      style={
        {
          "--progress": progress,
        } as React.CSSProperties
      }
    />
  );
};

export default ProgressBar;
