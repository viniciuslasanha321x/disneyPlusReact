// Modules
import React, { PropsWithChildren, useState, memo } from 'react';

// Stylized components
import { Container } from './styles';

interface FilmCardProps {
  imgUrl: string;
  altImg: string;
  videoUrl: string;
}

const FilmCard = ({
  imgUrl,
  videoUrl,
  altImg,
}: PropsWithChildren<FilmCardProps>) => {
  const [isAutoplayVideo, setIsAutoplayVideo] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsAutoplayVideo(true)}
      onMouseLeave={() => setIsAutoplayVideo(false)}
    >
      <img src={imgUrl} alt={altImg} />

      {isAutoplayVideo && (
        <video autoPlay={isAutoplayVideo} loop muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </Container>
  );
};

export default memo(FilmCard);
