import { useState, useEffect } from 'react';

interface ProgressiveImgProps {
  placeholder: string;
  src: string;
  alt: string;
  className?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function ProgressiveImg({ placeholder, src, alt, className }: ProgressiveImgProps) {
  const [imgSrc, setImgSrc] = useState(placeholder || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={classNames(className ? className : '', imgSrc === placeholder ? 'filter blur-md' : 'filter blur-none transition-all ease-out duration-200')}
    />
  )
}

export default ProgressiveImg
