import React, { useEffect, useState } from 'react';
import { Server } from '../../services/serverTeste';
import Header from '../../components/Header';
import MovieAndSeriePage, {
  ISeriesMovies,
} from '../../components/MovieAndSeriePage';
import { api, readfile } from '../../services/api';

export type Slide = { link: string; img: string };

const WandavisionPageFilm: React.FC = () => {
  const [imageMoviePartOne, setImageMoviePartOne] = useState<Slide[]>([]);
  const [imageMoviePartTwo, setImageMoviePartTwo] = useState<Slide[]>([]);
  const [imageMoviePartThree, setImageMoviePartThree] = useState<Slide[]>([]);
  const { wandavisionInformations } = Server;
  const [mvSeries, setMvseries] = useState<ISeriesMovies>(
    wandavisionInformations,
  );

  useEffect(() => {
    (async function loadSlides() {
      const { data: data1 } = await api.get<Slide[]>(
        'protagonistwomenimagesdashboard',
      );
      const { data: data2 } = await api.get<Slide[]>(
        'imagesmusicanddancedashboard',
      );

      const { data: data3 } = await api.get<Slide[]>(
        'actionandadventureimagesdashboard',
      );
      // const { data: data3 } = await api.get<Slide[]>('routesuggestionpartone');
      // const { data: data4 } = await api.get<Slide[]>('routesuggestionparttwo');

      // const formattedArray = Array(10).fill(data1[0]);
      // console.log(formattedArray);
      setImageMoviePartOne(data1);
      // setImageMoviePartTwo(data2);
      setImageMoviePartTwo(data2);

      setImageMoviePartThree(data3);

      setMvseries(wandavisionInformations);
      // setImageSuggestionMoviePartTwo(data4);
    })();
  }, [wandavisionInformations]);

  return (
    <>
      <Header />
      <MovieAndSeriePage
        seriesMovies={mvSeries}
        // backgroundImage={WandaVisionImageBackground}
        // filmLogo={WandaVisionLogo}
        // genreMoviesAndClassifications="receber da api informações de classificação do filme relacionado"
        // infoMovie="this one is a text that will receive the summary of all
        // information from the film, will be received by tmdb and
        // componentized, I am writing a test text so that the container does
        // not become ugly and is complete, simulating more or less the size
        // of a text that will be inserted here, it’s just for testing and
        // example only, ignore this text, it’s just for testing purposes"
        imageMoviePartOne={imageMoviePartOne}
        imageMoviePartTwo={imageMoviePartTwo}
        imageMoviePartThree={imageMoviePartThree}
        disableEpisodiesTab
        // // imageMoviePartTwo={imageSuggestionMoviePartOne}
        // // imageSuggestionMoviePartTwo={imageSuggestionMoviePartTwo}
        // releaseDateInformation="receber da api"
        // genreInformation="receber da api"
        // classificationInformation="receber a api"
        // firstPersonCast="receber a api"
        // secondPersonCast="receber a api"
        // thirdPersonCast="receber a api"
        // fourthPersonCast="receber a api"
        // fifthPersonCast="receber a api"
        // sixthPersonCast="receber a api"
        // titlefilm="title film"
        // filmSummary="this one is a text that will receive the summary of all
        // information from the film, will be received by tmdb and
        // componentized, I am writing a test text so that the container does
        // not become ugly and is complete, simulating more or less the size
        // of a text that will be inserted here, it’s just for testing and
        // example only, ignore this text, it’s just for testing purposes"
      />
    </>
  );
};

export default WandavisionPageFilm;
