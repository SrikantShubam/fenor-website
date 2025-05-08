import React from 'react';
import Image from 'next/image';

interface ImageBlockProps {
  src?: string;
  alt?: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ src, alt }) => {
  return src ? <Image src={src} alt={alt || ''} width={500} height={300} /> : null;
};

export default ImageBlock;