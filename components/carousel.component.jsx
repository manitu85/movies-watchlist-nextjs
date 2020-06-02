import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'

const items = [
  {
    id: 1,
    src: "/business-cinema.jpg",
    altText: 'Cinema',
    caption: 'The Shawshank Redemption'
  },
  {
    id: 2,
    src: "/popcorn-movie.jpg",
    altText: 'Popcorn',
    caption: 'The Dark Knight'
  },
  {
    id: 3,
    src: "/art-camera.jpg",
    altText: 'Camera Film',
    caption: 'Lord of the Rings'
  }
];

const CarouselSlider = props => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const next = () => {
    if (animate) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animate) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animate) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimate(true)}
        onExited={() => setAnimate(false)}
        key={item.id}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption} captionText={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className='py-4'
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselSlider