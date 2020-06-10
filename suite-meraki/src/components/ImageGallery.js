import React from "react";
import ResponsiveGallery from "react-responsive-gallery";
import { photos } from "../data/GalleryData";

const ImageGallery = () => {
  return (
    <div>
      <ResponsiveGallery images={photos} useLightBox="true" />
    </div>
  );
};

export default ImageGallery;
