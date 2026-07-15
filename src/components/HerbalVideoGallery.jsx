import React from 'react';
import './HerbalVideoGallery.css';

const HerbalVideoGallery = () => {
  const videoUrls = [
    'https://youtube.com/shorts/dnwklgBDtbg',
    'https://youtube.com/shorts/IaOt8rW4vc8',
    'https://youtube.com/shorts/7D9W2CjPBag',
    'https://youtube.com/shorts/Z1kOyuGFI8A',
  ];
  
  const rowVideos = [
    ...videoUrls,
    ...videoUrls,
  ].slice(0, 8);
  
  const doubledRowVideos = [...rowVideos, ...rowVideos];

  return (
    <section className="herbal-video-gallery">
      <div className="gallery-content">
        <h2 className="gallery-heading">Experience Herbal Wellness</h2>
        <p className="gallery-description">
          Discover how our herbal products fit naturally into everyday life through short videos and customer experiences.
        </p>
        
        <div className="video-carousel">
          <div className="carousel-row">
            <div className="carousel-track">
              {doubledRowVideos.map((url, idx) => {
                const videoId = url.split('/').pop();
                const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`;
                
                return (
                  <div key={`row-${idx}`} className="video-card">
                    <iframe
                      className="video-embed"
                      src={embedUrl}
                      title={`Herbal Video ${idx}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="video-overlay">
                      <div className="overlay-top-right">
                        <span className="herbal-badge">🌿 Herbal</span>
                      </div>
                      <div className="overlay-bottom-left">
                        <span className="watch-now">▶ Watch Now</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HerbalVideoGallery;
