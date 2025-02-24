// LoadingImage.jsx
import React, { useState } from 'react';
import '../styles/Catalogo.css';

const LoadingImage = ({ src, alt, onClick, ...props }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className='image'>
      {loading && (
        <div>
          <img src="https://example.com/loading-icon.gif" alt="Cargando" />
        </div>
      )}
      <img className='image'
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onClick={onClick}
        style={{ display: loading ? 'none' : 'block' }}
        {...props}
      />
    </div>
  );
};

export default LoadingImage;