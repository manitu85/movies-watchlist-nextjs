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
    src: "/images/cinema.jpg",
    caption: 'Cinema',
  },
  {
    id: 2,
    src: "/images/art-camera.jpg",
    caption: 'Vintage Camera Film',
  },
  {
    id: 3,
    src: "/images/popcorn-movie.jpg",
    caption: 'Popcorn Forever',
  }
]

const CarouselSlider = props => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [animate, setAnimate] = useState(false)

  const next = () => {
    if (animate) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animate) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animate) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(({id, src, caption}) => {
    return (
      <CarouselItem
        onExiting={() => setAnimate(true)}
        onExited={() => setAnimate(false)}
        key={id}
      >
        <img src={src} alt={caption} />
        {/* <CarouselCaption captionHeader={item.caption}  /> */}
      </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className='py-4'
    >
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  )
}

export default CarouselSlider