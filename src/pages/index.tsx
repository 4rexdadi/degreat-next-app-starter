// import
import { FC } from "react";

import MarqueeScroll from "../subComponent/MarqueeScroll/MarqueeScroll";

const Home: FC = (): JSX.Element => {
  return (
    <div
      style={{
        // height: "200VH",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MarqueeScroll
        pin
        pinStart="top center"
        pinEnd="2400 top"
        pinSpacing
        className="Marquee"
        repeat={3}
      >
        <h1
          style={{ fontSize: "60px", paddingInline: "20px" }}
          className="Marquee-item"
        >
          This is Degreat-Next-App-Starter
        </h1>
      </MarqueeScroll>
    </div>
  );
};

export default Home;
