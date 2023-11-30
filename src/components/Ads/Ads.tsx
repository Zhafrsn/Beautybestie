import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900, // Sesuaikan dengan kecepatan slide
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Sesuaikan dengan kecepatan autoplay
    afterChange: (current: number) => setCurrentSlide(current),
    arrows: false,

  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000); // Sesuaikan dengan kecepatan autoplay
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ position:'relative', zIndex: -1}}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ width: '100%' , height: '700px' }}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: '700px' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
