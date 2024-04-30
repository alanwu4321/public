import React from "react";
import IdealImage from "@theme/IdealImage";

export const CenteredImage = ({ src, alt, ...props }) => {
  return (
    <div className="flex justify-center">
      <IdealImage img={src} alt={alt} {...props} />
    </div>
  );
};
