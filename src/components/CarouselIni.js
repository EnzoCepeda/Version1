import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Objetos de CarouselIni
const items = [
  {
    src: "/burgercarousel.jpg", 
    caption: 'Las mejores Burgers'
   
  },
  {
    src: './empcarousel.jpg',
    caption: 'Variedades de empanadas'
  },
  {
    src: "/pizzacarousel.jpg",
    caption: 'Diferentes sabores'
  },
];

function CarouselIni(args) {
  
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
        
      >
        <img style={{
         marginLeft:'13%',
         marginTop:'5%',
         borderRadius:'4%',
         
        }} 
        src={item.src} alt={item.altText} width='600px' height='380px' border-radius='20%'/>
        <CarouselCaption 
        captionHeader={item.caption}
        />
      </CarouselItem>
     
    );
  });


  return (

  
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
     
    >
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
 
}


export default CarouselIni;