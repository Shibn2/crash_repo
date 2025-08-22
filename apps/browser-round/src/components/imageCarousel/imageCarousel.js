import React, { useEffect, useRef, useState } from "react";

const CAROUSEL_GAP = 10;
const BORDER = 1;
function ImageCarousel({ items }) {
  const [containerWidth, setContainerWidth] = useState(0);
  const slide = useRef(null);
  const slideStrip = useRef(null);
  const currentSLide = useRef(0);

  useEffect(() => {
    if (slide.current) {
      const slideWidth = slide.current.clientWidth;
      setContainerWidth(slideWidth);
    }
  }, []);

  const onLeftClick = () => {
    if (slideStrip.current && currentSLide.current > 0) {
      currentSLide.current = currentSLide.current - 1;
      slideStrip.current.style.transform = `translateX(-${
        currentSLide.current * (containerWidth + CAROUSEL_GAP + BORDER)
      }px)`;
    }
  };

  const onRightClick = () => {
    if (slideStrip.current && currentSLide.current < items.length - 1) {
      currentSLide.current = currentSLide.current + 1;
      slideStrip.current.style.transform = `translateX(-${
        currentSLide.current * (containerWidth + CAROUSEL_GAP + 2 * BORDER)
      }px)`;
    }
  };

  return (
    <div>
      <div
        style={{
          width: `${containerWidth + CAROUSEL_GAP}px`,
          overflow: "hidden",
        }}
      >
        <div
          ref={slideStrip}
          style={{ display: "inline-flex", flexShrink: 1, gap: "10px" }}
        >
          {items?.map((item) => {
            return (
              <div
                ref={slide}
                style={{
                  width: "250px",
                  height: "250px",
                  border: `${BORDER}px solid black`,
                  padding: "5px",
                  display: "flex",
                  gap: `${CAROUSEL_GAP}px`,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Image-{item}
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={onLeftClick}>◀️</button>
      <button onClick={onRightClick}>▶️</button>
    </div>
  );
}

const DEFAULT_ITEMS = [1, 2, 3, 4, 5, 6];

export default function CarouselContainer() {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageCarousel items={items} />
    </div>
  );
}
