// build a image carousel component with animation for switching images
// features should be support for both vertical and horizontal view, loop,
// auto play, on demand play, should stop auto play when mouse is hovered over any image

import { useEffect, useRef, useState } from 'react';

interface IProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  vertical?: boolean;
  loop?: boolean;
  onDemandPlay?: boolean;
  containerWidth?: number;
  containerHeight?: number;
}
const Carousel = ({ images, containerWidth, loop, vertical, containerHeight, autoPlay, autoPlayInterval }: IProps) => {
  console.log({ autoPlay });
  //states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onDemandPlay, setOnDemandPlay] = useState(autoPlay || false);

  const wasAutoPlayingBeforHover = useRef<boolean | null>(null);

  //const
  const carouselWidth = containerWidth || 320;
  const carouselHeight = containerHeight || 240;

  //functions
  function handlePrev() {
    if ((loop || onDemandPlay) && currentIndex == 0) {
      setCurrentIndex(images.length - 1);
    } else if (!loop && currentIndex === 0) {
      return;
    } else setCurrentIndex((prev) => prev - 1);
  }

  function handleNext() {
    if ((loop || onDemandPlay) && currentIndex >= images.length - 1) {
      setCurrentIndex(0);
    } else if (!loop && currentIndex >= images.length - 1) {
      return;
    } else setCurrentIndex((prev) => prev + 1);
  }

  function handlePlayButton() {
    console.log('clicked');
    setOnDemandPlay((prev) => !prev);
  }

  function handleMouseOver() {
    console.log('inside mouseOver');
    wasAutoPlayingBeforHover.current = onDemandPlay;
    onDemandPlay && setOnDemandPlay(false);
  }

  function handleMouseLeave() {
    if (wasAutoPlayingBeforHover.current) {
      setOnDemandPlay(true);
    }
  }

  console.log({ currentIndex });

  //hooks
  useEffect(() => {
    console.log('inside useeffect');
    let timeOutId: number;
    if (onDemandPlay) {
      console.log('inside iff');
      timeOutId = setTimeout(() => {
        console.log('isnide tiner');
        handleNext();
      }, autoPlayInterval || 2000);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [currentIndex, onDemandPlay]);

  return (
    <div className="flex flex-col gap-4  ">
      <div
        className={` overflow-hidden `}
        style={{
          maxWidth: `${containerWidth ? containerWidth : 320}px`,
          maxHeight: `${containerHeight ? containerHeight : 240}px`
        }}
      >
        <div
          className={`flex ${vertical ? 'flex-col' : 'flex-row'} transition-transform duration-300 ease-in-out `}
          style={{
            transform: `${
              vertical
                ? `translateY(-${carouselHeight * currentIndex}px)`
                : `translateX(-${carouselWidth * currentIndex}px)`
            }`
          }}
        >
          {images.map((image, idx) => (
            <img
              key={`carousel-image-${idx}`}
              src={image}
              height={40}
              width={40}
              alt={image + '$$'}
              className={`object-cover cursor-pointer`}
              style={{
                minHeight: carouselHeight,
                minWidth: carouselWidth
              }}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
      <div className={`gap-5 flex items-center justify-between`}>
        <div className={`flex ${vertical ? 'flex-col items-start ' : 'flex-row'}  gap-5`}>
          <button className="cursor-pointer outline-1 px-3 py-1  bg-blue-950 text-white " onClick={handlePrev}>
            {vertical ? `^` : '<'}
          </button>
          <button className="cursor-pointer outline-1 px-3 py-1  bg-blue-950 text-white " onClick={handleNext}>
            {vertical ? `v` : '>'}
          </button>
        </div>
        {!autoPlay && (
          <button
            className="cursor-pointer w-1/4 outline-1 px-3 py-1 rounded-md bg-blue-950 text-white"
            onClick={handlePlayButton}
          >
            {onDemandPlay ? ' Stop' : '  Start'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
