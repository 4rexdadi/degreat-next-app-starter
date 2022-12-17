// import
import { CSSPlugin, Expo, gsap } from "gsap";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setOverflow } from "../../store/scrollSlice";
// Import Styles
import { LoaderContainer } from "./loaderStyle";

gsap.registerPlugin(CSSPlugin);

interface LoaderProps {
  loadingSpeed: number;
}

const Loader: FC<LoaderProps> = ({ loadingSpeed }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // reveal function to animate and reveal page using gsap timeline
  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });
    t1.to(".Follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".Follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".ContentDisplay", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to(".Follow", {
        opacity: 0,
        duration: 0.01,
      })
      .to(".ContentDisplay", {
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.01,
      });
  };

  useEffect(() => {
    // Disable & Enable Scrolling
    if (isLoading) {
      dispatch(setOverflow(false));
    } else dispatch(setOverflow(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    // count function to call reveal function when count get to 100
    const count = setInterval(() => {
      const isComplete = () => {
        clearInterval(count);
        setCounter(100);
        reveal();

        return 100;
      };

      setCounter((counter) => (counter < 100 ? counter + 1 : isComplete()));
    }, loadingSpeed);
  }, [loadingSpeed]);

  return isLoading === false ? null : (
    <LoaderContainer>
      <div className="Loading">
        <div className="Follow" />

        <div
          className="ProgressBar hide"
          id="progress-bar"
          style={{ width: `${counter}%` }}
        />

        {/* <p id="count" className="Count hide">
          {counter}%
        </p> */}
      </div>

      <div className="ContentDisplay" />
    </LoaderContainer>
  );
};

export default Loader;
