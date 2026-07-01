"use client";

import { useState } from "react";

const ShowImage = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]?.url);
  return (
    <>
      <div className="hidden md:flex flex-col space-y-4 mr-6">
        {images.map((img, index) => (
          <img
            onClick={() => setMainImage(img?.url)}
            key={index}
            src={img.url}
            alt={img?.altText}
            className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
          />
        ))}
      </div>

      {/* main image */}
      <div className="md:w-1/2">
        <div className="mb-4">
          <img
            src={mainImage}
            alt=""
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      {/* mobile thumbnail */}
      <div className="md:hidden flex overscroll-x-auto space-x-4 mb-4 ">
        {images.map((img, index) => (
          <img
            onClick={() => setMainImage(img?.url)}
            key={index}
            src={img.url}
            alt={img?.altText}
            className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
          />
        ))}
      </div>
    </>
  );
};

export default ShowImage;
