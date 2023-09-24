import React from 'react';

interface ImageContainerProps {
  imageUrl: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl }) => {
  return (
    <div className="relative flex justify-center items-center pt-8">
      <img src={imageUrl} alt="Logotipo" className="w-20 h-auto max-w-full" />
    </div>
  );
};

export default ImageContainer;
