import React, { useEffect, useState } from 'react';
import slide1 from '../assets/banner-01.jpg';
import slide2 from '../assets/banner_2.jpg';
import slide3 from '../assets/banner_3.jpg';

const slides = [slide1, slide2, slide3];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <>
      <style>
        {`
          .hero-section {
            margin-top: 65px;
            padding: 0;
            width: 100%;
            max-width: 1920px;
            margin-left: auto;
            margin-right: auto;
            box-sizing: border-box;
            min-height: 320px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .hero-media {
            width: 100%;
            max-width: 1920px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .hero-link {
            display: block;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: none;
            text-decoration: none;
            position: relative;
          }
          .hero-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            max-height: 105vh;
            object-fit: cover;
            object-position: center;
            opacity: 0;
            transition: opacity 800ms ease-in-out;
            margin: 0;
          }
          .hero-slide.active {
            opacity: 1;
            position: relative;
          }
          .slider-dots {
            display: flex;
            gap: 8px;
            justify-content: center;
            align-items: center;
            padding: 12px 0;
            position: relative;
            z-index: 10;
          }
          .slider-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: rgba(200, 200, 200, 0.6);
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0;
          }
          .slider-dot:hover {
            background-color: rgba(150, 150, 150, 0.8);
            transform: scale(1.15);
          }
          .slider-dot.active {
            background-color: #15B715;
            width: 24px;
            border-radius: 4px;
          }
          @media (max-width: 1024px) {
            .hero-slide {
              object-fit: contain;
            }
          }
          @media (max-width: 768px) {
            .hero-slide {
              object-fit: contain;
            }
          }
          @media (max-width: 1024px) {
            .hero-section { 
              min-height: 220px;
            }
            .hero-slide {
              max-height: 40vh;
            }
            .slider-dots {
              padding: 10px 0;
            }
          }
          @media (max-width: 768px) {
            .hero-section { 
              margin-top: 60px;
              min-height: 120px;
            }
            .hero-slide {
              max-height: 40vh;
            }
            .slider-dots {
              padding: 8px 0;
              gap: 6px;
            }
            .slider-dot {
              width: 6px;
              height: 6px;
            }
            .slider-dot.active {
              width: 18px;
            }
          }
        `}
      </style>

      <section
        id="home"
        className="hero-section"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="hero-media" aria-hidden>
          <a href="/offerings" className="hero-link">
            {slides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`slide-${i + 1}`}
                className={`hero-slide ${i === index ? 'active' : ''}`}
              />
            ))}
          </a>
        </div>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;