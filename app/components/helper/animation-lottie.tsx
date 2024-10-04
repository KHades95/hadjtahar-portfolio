"use client"; // Ensures this code is run only on the client side

import Lottie, { Options, EventListener } from 'react-lottie';
import React, { useEffect, useRef } from "react";

interface AnimationLottieProps {
  animationPath: any; // You might want to replace 'any' with the specific type of your animation JSON
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({ animationPath }) => {
  // Using useRef to maintain a reference to the Lottie animation instance
  const animationInstance = useRef<any>(null);

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationPath, // This should be the JSON object for the animation, not the path
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    // Cleanup function to destroy the animation instance when the component unmounts
    return () => {
      if (animationInstance.current) {
        console.log(`animationInstance current`, animationInstance.current);
        // animationInstance.current.destroy();
      }
    };
  }, []);

  const eventListeners: EventListener[] = [
    {
      eventName: 'complete',
      callback: () => console.log('Animation completed'),
    },
  ];

  return (
    <Lottie 
      options={defaultOptions} // Passing in the default options for Lottie
      eventListeners={eventListeners} // Event listeners for Lottie animations
      height={400} // Specify a height for the Lottie animation
      width={400}  // Specify a width for the Lottie animation
      ref={(instance) => {
        // Assigning the Lottie instance to the useRef hook
        animationInstance.current = instance;
      }}
    />
  );
};

export default AnimationLottie;
