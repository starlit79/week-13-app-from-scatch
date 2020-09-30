import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "/images/outside2.png",
    caption: "Front of the House"
  },
  {
    src: "/images/outside 1.png",
    caption: "Front of the House View 2"
  },
  {
    src: "/images/living room 1.png",
    caption: "Living Room"
  },
  {
    src: "/images/living room2.png",
    caption: "Living Room View 2"
  },
  {
    src: "/images/living room 3.png",
    caption: "Living Room View 3"
  },
  {
    src: "/images/kitchin1.png",
    caption: "Kitchen View 1"
  },
  {
    src: "/images/kitchen2.png",
    caption: "Kitchen View 2"
  },
  {
    src: "/images/kitchen 3.png",
    caption: "Kitchen View 3"
  },
  {
    src: "/images/bedroom 1a.png",
    caption: "Bedroom #1 View 1"
  },
  {
    src: "/images/bedroom 1b.png",
    caption: "Bedroom #1 View 2"
  },
  {
    src: "/images/bedroom1.png",
    caption: "Queen Bedroom #1 View 3"
  },
  {
    src: "/images/bedroom2.png",
    caption: "Queen Bedroom #2 View 1"
  },
  {
    src: "/images/bedroom2a.png",
    caption: "Queen Bedroom #2 View 2"
  },
  {
    src: "/images/bedroom5.png",
    caption: "Queen Bed In Family Room View 1"
  },
  {
    src: "/images/bedroom5a.png",
    caption: "Queen Bed In Family Room View 2"
  },
  {
    src: "/images/bedroom3.png",
    caption: "Two Set Twindle Bedroom (Four twins)"
  },
  {
    src: "/images/bedroom4a.png",
    caption: "One Set Twindle Bedroom (Two twins)"
  },
  {
    src: "/images/bedroom4b.png",
    caption: "One Set Twindle Bedroom (Two twins)"
  },

  {
    src: "/images/kitchen 3.png",
    caption: "Kitchen View 3"
  },
  {
    src: "/images/kitchen 3.png",
    caption: "Kitchen View 3"
  },
  {
    src: "/images/kitchen 3.png",
    caption: "Kitchen View 3"
  },
  {
    src: "/images/dining room1.png",
    caption: "Dining Room View 1"
  }, {
    src: "/images/dining room2.png",
    caption: "Dining Room View 2"
  },
  {
    src: "/images/bathroom1.png",
    caption: "Bathroom #1 With Laundry View 1"
  },
  {
    src: "/images/bathroom1a.png",
    caption: "Bathroom #1 View 2"
  },
  {
    src: "/images/bathroom2.png",
    caption: "Bathroom #2 View 1"
  },
  {
    src: "/images/bathroom2a.png",
    caption: "Bathroom #2 View 2"
  },
  {
    src: "/images/bathroom2c.png",
    caption: "Bathroom #2 View 3"
  },
  {
    src: "/images/playpen.png",
    caption: "Playpen Available"
  },
  {
    src: "/images/deck with light.png",
    caption: "Deck At Night With Lighting"
  },
  {
    src: "/images/deck.png",
    caption: "Deck During The Day"
  },
  {
    src: "/images/back yard.png",
    caption: "Back Yard View 1"
  },
  {
    src: "/images/backyard2.png",
    caption: "Back Yard View 2"
  },
  {
    src: "/images/backyard3.png",
    caption: "Back Yard View 3"
  },
  {
    src: "/images/pirate's cove.png",
    caption: "Pirate's Cove"
  },
  {
    src: "/images/redface jack.png",
    caption: "Redface jack"
  },
  {
    src: "/images/mike's.png",
    caption: "Mike's"
  },
  {
    src: "/images/seagull beach.png",
    caption: "Seagull Beach View 1"
  },
  {
    src: "/images/seagull beach2.png",
    caption: "Seagull Beach View 2"
  },
];

const Gallery = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Gallery;
