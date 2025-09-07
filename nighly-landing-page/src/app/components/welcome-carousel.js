import React from "react";

export default function WelcomeCarousel() {
  return (
    <div className="carousel w-full h-[900px] rounded-2xl border-[3px] border-primary overflow-hidden relative">

      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="/NightSky.jpg"
          alt="Night Sky Stars"
          className="w-full h-full object-cover"
        />
        <div className="badge badge-accent absolute bottom-5 left-5">
          Photo by Kai Pilger:{" "}
          <a
            href="https://www.pexels.com/photo/cluster-of-stars-1341279/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View Photo!
          </a>
        </div>
        {/* Navigation */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="/Greenland.jpg"
          alt="Greenland"
          className="w-full h-full object-cover"
        />
        <div className="badge badge-accent absolute bottom-5 left-5">
          Photo by Visit Greenland:{" "}
          <a
            href="https://www.pexels.com/photo/aurora-borealis-360912/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View Photo!
          </a>
        </div>
        {/* Navigation */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
}
