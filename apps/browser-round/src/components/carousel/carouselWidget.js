import React, { useEffect, useState } from "react";

const images = [
  {
    src: "https://picsum.photos/id/600/600/400",
    alt: "Forest",
  },
  {
    src: "https://picsum.photos/id/100/600/400",
    alt: "Beach",
  },
  {
    src: "https://picsum.photos/id/200/600/400",
    alt: "Yak",
  },
  {
    src: "https://picsum.photos/id/300/600/400",
    alt: "Hay",
  },
  {
    src: "https://picsum.photos/id/400/600/400",
    alt: "Plants",
  },
  {
    src: "https://picsum.photos/id/500/600/400",
    alt: "Building",
  },
];

function Slide({ imgSrc }) {
  return (
    <div style={{ height: "200px" }}>
      <img style={{ height: "200px" }} src={imgSrc} />
    </div>
  );
}

function Carousel({ children, defaultSlide, auto }) {
  const [currentSlideIdx, setSlideIdx] = useState(defaultSlide);
  const totalSlides = children.length;
  useEffect(() => {
    let timer = null;
    if (auto) {
      const timer = setInterval(() => {
        setSlideIdx((prev) => {
          if (prev < totalSlides - 1) {
            prev = prev + 1;
          } else {
            prev = 0;
          }
          return prev;
        });
      }, 2000);
    }

    return () => timer && clearInterval(timer);
  }, []);

  const onNavClick = (dir) => {
    setSlideIdx((prev) => {
      if (prev < totalSlides - 1 && dir === "r") {
        prev = prev + 1;
      }
      if (prev > 0 && dir === "l") {
        prev = prev - 1;
      }
      return prev;
    });
  };

  return (
    <div>
      <button onClick={() => onNavClick("l")}>left</button>
      {children[currentSlideIdx]}
      <button onClick={() => onNavClick("r")}>right</button>
    </div>
  );
}

function CarouselWidget({ data = [], defaultSlide, auto }) {
  return (
    <Carousel defaultSlide={defaultSlide} auto={auto}>
      {data?.map((slide) => {
        return <Slide imgSrc={slide.src} />;
      })}
    </Carousel>
  );
}

export default function CarouselWidgetWrapper() {
  return <CarouselWidget data={images} defaultSlide={3} auto={false} />;
}
