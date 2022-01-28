import React, { useState, useEffect } from "react";
import { useSpring, animated, easings } from "react-spring";
import { blobs } from "../constants/blobs";

const Blob = () => {
  const [stage, setStage] = useState(0);
  // const animDur = 1000;
  const { blob } = useSpring({
    blob: blobs[stage],
    config: {
      duration: 1000,
      easing: easings.linear,
    },
  });

  useEffect(() => {
    setStage(1);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setStage((stage + 1) % 2);
    }, 1000);

    return () => clearTimeout(id);
  }, [stage]);

  return (
    <svg
      viewBox="0 0 500 500"
      width="500"
      height="500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <animated.path
        d={blob}
        transform="translate(258.9561842708665 238.50577167339787)"
        fill="#BB004B"
      ></animated.path>
    </svg>
  );
};

export default Blob;
