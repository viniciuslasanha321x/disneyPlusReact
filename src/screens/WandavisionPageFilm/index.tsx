import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import MovieAndSeriePage from '../../components/MovieAndSeriePage';
import { api } from '../../services/api';

import WandaVisionImageBackground from '../../assets/images/BackgroundWandaVision.png';
import WandaVisionLogo from '../../assets/images/WandaVisionLogo.png';

export type Slide = { link: string; img: string };

const WandavisionPageFilm: React.FC = () => {
  const [imageMoviePartOne, setImageMoviePartOne] = useState<Slide[]>([]);
  // const [imageMoviePartTwo, setImageMoviePartTwo] = useState<Slide[]>([]);
  const [
    imageSuggestionMoviePartOne,
    setImageSuggestionMoviePartOne,
  ] = useState<Slide[]>([]);
  // const [
  //   imageSuggestionMoviePartTwo,
  //   setImageSuggestionMoviePartTwo,
  // ] = useState<Slide[]>([]);

  useEffect(() => {
    (async function loadSlides() {
      const { data: data1 } = await api.get<Slide[]>(
        'recommendedcategoryimages',
      );
      const { data: data2 } = await api.get<Slide[]>('wandavisionimagespartwo');
      // const { data: data3 } = await api.get<Slide[]>('routesuggestionpartone');
      // const { data: data4 } = await api.get<Slide[]>('routesuggestionparttwo');

      // const formattedArray = Array(10).fill(data1[0]);
      // console.log(formattedArray);
      setImageMoviePartOne(data1);
      // setImageMoviePartTwo(data2);
      setImageSuggestionMoviePartOne(data2);
      // setImageSuggestionMoviePartTwo(data4);
    })();
  }, []);

  return (
    <>
      <Header />
      <MovieAndSeriePage
        backgroundImage={WandaVisionImageBackground}
        filmLogo={WandaVisionLogo}
        genreMoviesAndClassifications="receber da api informações de classificação do filme relacionado"
        infoMovie="this one is a text that will receive the summary of all
        information from the film, will be received by tmdb and
        componentized, I am writing a test text so that the container does
        not become ugly and is complete, simulating more or less the size
        of a text that will be inserted here, it’s just for testing and
        example only, ignore this text, it’s just for testing purposes"
        imageMoviePartOne={imageMoviePartOne}
        // imageMoviePartTwo={imageSuggestionMoviePartOne}
        imageSuggestionMoviePartOne={imageSuggestionMoviePartOne}
        // imageSuggestionMoviePartTwo={imageSuggestionMoviePartTwo}
        releaseDateInformation="receber da api"
        genreInformation="receber da api"
        classificationInformation="receber a api"
        firstPersonCast="receber a api"
        secondPersonCast="receber a api"
        thirdPersonCast="receber a api"
        fourthPersonCast="receber a api"
        fifthPersonCast="receber a api"
        titlefilm="title film"
        filmSummary="this one is a text that will receive the summary of all
        information from the film, will be received by tmdb and
        componentized, I am writing a test text so that the container does
        not become ugly and is complete, simulating more or less the size
        of a text that will be inserted here, it’s just for testing and
        example only, ignore this text, it’s just for testing purposes"
      />
    </>
  );
};

export default WandavisionPageFilm;
