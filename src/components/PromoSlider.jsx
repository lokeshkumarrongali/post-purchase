import React, { useState, useEffect, useRef } from 'react';

const PROMO_DATA = [
  { 
    id: 1, 
    image: "https://dummyimage.com/600x150/1db954/ffffff&text=Spotify+Premium+Free+Trial", 
    redirectUrl: "https://www.spotify.com",
    name: "Spotify"
  },
  { 
    id: 2, 
    image: "https://dummyimage.com/600x150/2bc5b4/ffffff&text=JioSaavn+Pro+Discount", 
    redirectUrl: "https://www.jiosaavn.com",
    name: "JioSaavn" 
  },
  { 
    id: 3, 
    image: "https://dummyimage.com/600x150/ff0000/ffffff&text=YouTube+Music+Ad-Free", 
    redirectUrl: "https://music.youtube.com",
    name: "YouTube Music"
  },
  { 
    id: 4, 
    image: "https://dummyimage.com/600x150/fa2d48/ffffff&text=Apple+Music+3+Months+Free", 
    redirectUrl: "https://music.apple.com",
    name: "Apple Music"
  },
];

const PromoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PROMO_DATA.length);
    }, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const containerStyle = {
    marginTop: '2rem',
    marginBottom: '1rem',
    width: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const headerStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#333',
    paddingLeft: '4px' 
  };

  const slideWrapperStyle = {
    position: 'relative',
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
    transition: 'opacity 0.4s ease-in-out',
  };

  const currentPromo = PROMO_DATA[currentIndex];

  return (
    <div style={containerStyle} className="promo-slideshow-section">
      <h3 style={headerStyle}>Recommended for Your Headphones</h3>
      <div 
        style={{
            ...slideWrapperStyle,
            transform: isHovered ? 'scale(1.01)' : 'scale(1)',
            boxShadow: isHovered ? '0 6px 16px rgba(0,0,0,0.12)' : '0 4px 12px rgba(0,0,0,0.08)'
        }}
        onClick={() => handleCardClick(currentPromo.redirectUrl)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                handleCardClick(currentPromo.redirectUrl);
            }
        }}
        aria-label={`Open ${currentPromo.name}`}
      >
        <img 
          key={currentPromo.id} 
          src={currentPromo.image} 
          alt={`${currentPromo.name} promo banner`} 
          style={{
            ...imageStyle,
            animation: 'fadeInSlide 0.4s ease-out'
          }} 
          className="promo-banner-image"
        />
        <style>
          {`
            @keyframes fadeInSlide {
              from { opacity: 0.6; transform: scale(0.99); }
              to { opacity: 1; transform: scale(1); }
            }
          `}
        </style>
        {/* Simple fade animation via keyframe could be added in a global css or style block if strictly needed, 
            but standard react re-render with key prop usually flickers without CSS transition group. 
            For "Calm", a direct switch is often better than a jumpy JS animation. 
            We'll stick to direct switch which is "smooth" enough because it doesn't jerk layout. 
        */}
      </div>
    </div>
  );
};

export default PromoSlider;
