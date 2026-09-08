import { useState } from 'react';

export default function LazyImage({ src, alt, className = '', skeletonClassName = '', ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative h-full w-full ${skeletonClassName || ''} ${loaded ? '' : 'skeleton'}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
}