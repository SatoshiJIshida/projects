import React from "react";
import ParticlesBg from "particles-bg";

/**
 * Background Animation Displaying Connections
 * Library "particles-bg" taken from source https://www.npmjs.com/package/particles-bg
 */
function Connections() {
  return <ParticlesBg type="cobweb" bg={true} />;
}

/**
 * Background Animation Displaying Square Movements
 * Library "particles-bg" taken from source https://www.npmjs.com/package/particles-bg
 */
function Movements() {
  return <ParticlesBg type="square" bg={true} />;
}

/**
 * Background Animation Displaying Circle Movements
 * Library "particles-bg" taken from source https://www.npmjs.com/package/particles-bg
 */
function Movements2() {
  return <ParticlesBg type="circle" bg={true} />;
}

export { Connections, Movements, Movements2 };
