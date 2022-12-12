import { CSSPlugin, Expo, gsap } from "gsap";
// Imports Styles
import {
  ContentDisplay,
  Follow,
  LoaderContainer,
  Loading,
  ProgressBar,
} from "./loaderStyle";
// import
import React, { FC, useEffect, useState } from "react";

import { setOverflow } from "../../store/scrollSlice";
import { useDispatch } from "react-redux";

gsap.registerPlugin(CSSPlugin);

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);

  useEffect(() => {
    // Disable & Enable HTML From Scrolling

    if (isLoading) {
      dispatch(setOverflow(false));
    } else dispatch(setOverflow(true));
  }, [isLoading]);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter: any) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        setIsLoading(null);
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
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
      .to(".follow", {
        opacity: 0,
        duration: 0.01,
      })
      .to(".ContentDisplay", {
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.01,
      });
  };

  return (
    <>
      {isLoading && (
        <LoaderContainer>
          <Loading>
            <Follow className="follow"></Follow>

            <ProgressBar
              className="hide"
              id="progress-bar"
              style={{ width: counter + "%" }}
            ></ProgressBar>

            {/* <Count id="count" className="hide">
							{counter}%
						</Count> */}
          </Loading>

          <ContentDisplay className="ContentDisplay"></ContentDisplay>
        </LoaderContainer>
      )}
    </>
  );
};

export default Loader;
