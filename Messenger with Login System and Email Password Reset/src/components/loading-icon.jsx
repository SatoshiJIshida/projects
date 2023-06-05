import React from "react";
import "../index.css";

/**
 * LoadingIcon functional component.
 * @returns {component} LoadingIcon component.
 * @author [Satoshi Ishida]
 */
export const LoadingIcon = () => {
  return (
    <div key="loadingIcon" className="loading-spin-container">
      <div className="loading-spin"></div>
    </div>
  );
};
