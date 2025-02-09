import React from "react";

const awards = [
  { src: "https://www.infinitytechltd.com/storage/award/Infinity%20w3.jpg", alt: "Award 3" },
  { src: "https://www.infinitytechltd.com/storage/award/Infinity%20w2.jpg", alt: "Award 4" },
  { src: "https://www.infinitytechltd.com/storage/award/Infinity%20w1.jpg", alt: "Award 5" },
];

const OurAwards = () => {
  return (
    <div className="grid gap-4 grid-cols-3">
      {awards.map((award, index) => (
        <div key={index}>
          <img className="rounded object-contain" src={award.src} alt={award.alt} />
        </div>
      ))}
    </div>
  );
};

export default OurAwards;
