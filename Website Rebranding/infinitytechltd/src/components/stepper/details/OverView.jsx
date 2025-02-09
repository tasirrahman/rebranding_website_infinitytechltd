import React from "react";

const images = [
  { src: "https://www.infinitytechltd.com/storage/cirtificate/Infinity%20c1.png", alt: "Image 1" },
  { src: "https://www.infinitytechltd.com/storage/cirtificate/Infinity%20c2.jpg", alt: "Image 2" },

  { src: "https://www.infinitytechltd.com/storage/cirtificate/Infinity%20c4.jpg", alt: "Image 4" },
  { src: "https://www.infinitytechltd.com/storage/cirtificate/Infinity%20c3.jpg", alt: "Image 3" },
  { src: "https://www.infinitytechltd.com/storage/cirtificate/Infinity%20Cirtificate%20BASIS.png", alt: "Image 5" },
];

const OverView = () => {
  return (
    <div className="grid gap-4 grid-cols-3">
      {images.map((image, index) => (
        <div key={index} className="">
          <img className="rounded object-contain" src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default OverView;
