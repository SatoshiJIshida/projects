import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

/**
 * Teacher Animation 2
 * Library "react-sprite-animator" taken from source https://www.npmjs.com/package/react-sprite-animator
 */
export default function Teacher2() {
  return (
    <SpriteAnimator
      sprite="./img/items/teacher2.png"
      width={200}
      height={190}
      fps={2}
    />
  );
}
