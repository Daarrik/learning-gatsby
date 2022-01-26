import React, { useState, useEffect } from "react";
import { useSpring, animated, easings } from "react-spring";

const Blob = () => {
  const [stage, setStage] = useState(0);
  const animDur = 800;
  useEffect(() => {
   const id = setTimeout(() => {
      setStage((stage + 1) % 3);
      console.log(stage);
    }, animDur);

    return () => clearTimeout(id);
  }, [stage]);

  useEffect(() => {
    setStage(1);
  }, []);

  const { path } = useSpring({ config: { duration: animDur, easing: easings.linear }, path: stage });

  return (
    <svg
      viewBox="0 0 500 500"
      height="500px"
      width="500px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <animated.path
        transform="translate(258.9561842708665 238.50577167339787)"
        fill="#BB004B"
        d={path.to({
          range: [0, 1, 2],
          output: [
            "M101.8 -107.9C133.8 -69.8 162.9 -34.9 164.4 1.5C165.9 37.9 139.9 75.9 107.9 115.1C75.9 154.2 37.9 194.6 -10.5 205.1C-58.9 215.6 -117.9 196.2 -150.5 157C-183.2 117.9 -189.6 58.9 -174.9 14.7C-160.1 -29.5 -124.3 -58.9 -91.6 -97.1C-58.9 -135.3 -29.5 -182.1 2.7 -184.8C34.9 -187.6 69.8 -146.1 101.8 -107.9",
            "M86.1 -84.5C108.6 -63.6 121.8 -31.8 135.4 13.6C148.9 58.9 162.9 117.9 140.4 140C117.9 162.2 58.9 147.6 7.7 139.9C-43.6 132.3 -87.2 131.5 -113.4 109.4C-139.5 87.2 -148.3 43.6 -151.8 -3.5C-155.3 -50.7 -153.7 -101.4 -127.5 -122.2C-101.4 -143 -50.7 -134 -9.4 -124.6C31.8 -115.2 63.6 -105.3 86.1 -84.5",
            "M93.3 -106.3C120.7 -66 142.3 -33 153.1 10.7C163.8 54.4 163.6 108.9 136.2 129.7C108.9 150.6 54.4 137.8 -2.2 140C-58.9 142.3 -117.9 159.5 -159.2 138.7C-200.5 117.9 -224.3 58.9 -210.1 14.1C-196 -30.6 -143.9 -61.3 -102.6 -101.6C-61.3 -141.9 -30.6 -192 1.2 -193.2C33 -194.3 66 -146.7 93.3 -106.3",
          ],
        })}
      />
    </svg>
  );
};

export default Blob;
