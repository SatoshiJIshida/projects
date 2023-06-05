import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

/**
 * Teacher Animation
 * Library "react-sprite-animator" taken from source https://www.npmjs.com/package/react-sprite-animator
 */
export default function Teacher() {
  return (
    <SpriteAnimator
      sprite="./img/items/teacher1.png"
      width={400}
      height={445}
      fps={10}
      className="fadeIn1"
    />
  );
}
