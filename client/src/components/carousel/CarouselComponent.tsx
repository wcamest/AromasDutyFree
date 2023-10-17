"use client";

import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import styles from "./CarouselComponent.module.css";

type Props = {
  slideInterval: number;
  slides: React.JSX.Element[];
  ghostElement: React.JSX.Element;
};

type CarouselComponentState = {
  timerId: NodeJS.Timeout | undefined;
  currentSlideIndex: number;
};

const CarouselComponent = (props: Props) => {
  const { slideInterval, slides, ghostElement } = props;
  const [state, setState] = useState<CarouselComponentState>({
    timerId: undefined,
    currentSlideIndex: 0,
  });
  const stateRef = useRef<CarouselComponentState>(state);

  const Functions = {
    SetState(updatedState: CarouselComponentState) {
      stateRef.current = updatedState;
      setState(updatedState);
    },
    UpdateCurrentSlideIndex(updatedIndex: number) {
      let updatedCurrentSlideIndex: number =
        stateRef.current.currentSlideIndex + updatedIndex;

      if (updatedCurrentSlideIndex >= slides.length)
        updatedCurrentSlideIndex = 0;

      if (updatedCurrentSlideIndex < 0)
        updatedCurrentSlideIndex = slides.length - 1;

      return updatedCurrentSlideIndex;
    },
    PreviousSlide() {
      Functions.ResetInterval(-1);
    },
    NextSlide() {
      Functions.ResetInterval(1);
    },
    ResetInterval(currentSlideIndex: number = 0) {
      Functions.DisposeInterval();
      const timerId: NodeJS.Timeout = setInterval(() => {
        const updatedSlideIndex = Functions.UpdateCurrentSlideIndex(1);
        Functions.SetState({
          ...stateRef.current,
          currentSlideIndex: updatedSlideIndex,
        });
      }, slideInterval * 1000);

      const updatedSlideIndex =
        Functions.UpdateCurrentSlideIndex(currentSlideIndex);

      Functions.SetState({
        currentSlideIndex: updatedSlideIndex,
        timerId,
      });
    },
    DisposeInterval() {
      if (stateRef.current.timerId) clearInterval(stateRef.current.timerId);
    },
  };

  const Renderer = {
    Slides() {
      return slides.map((slide: React.JSX.Element, key: number) => {
        return (
          <div
            key={key}
            className={`${
              key === stateRef.current.currentSlideIndex
                ? "opacity-100"
                : "opacity-0"
            } ${styles.carousel_component} absolute left-0 top-0 w-full h-full`}
          >
            {slide}
          </div>
        );
      });
    },
  };

  useEffect(() => {
    Functions.ResetInterval();

    return () => {
      Functions.DisposeInterval();
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative opacity-0">{ghostElement}</div>
      <div className="absolute left-0 top-0 w-full h-full flex justify-between">
        <div className="absolute left-0 top-0 w-full h-full">
          {Renderer.Slides()}
        </div>
        <div
          className="relative w-12 h-full flex justify-center items-center cursor-pointer text-white"
          onClick={() => {
            Functions.PreviousSlide();
          }}
        >
          <ChevronLeftIcon
            style={{
              scale: "3",
            }}
          />
        </div>
        <div
          className="relative w-12 h-full flex justify-center items-center cursor-pointer text-white"
          onClick={() => {
            Functions.NextSlide();
          }}
        >
          <ChevronRightIcon
            style={{
              scale: "3",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
