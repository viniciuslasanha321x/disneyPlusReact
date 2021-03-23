// Modules
import React, { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';

// Components
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import FilmCard from '../../components/FilmCard';
import TypesCarousel from '../../components/TypesCarousel';
import { CarouselContext } from '../../components/CarouselRoutesContext';
// import CarouselDashboard from '../../components/CarouselDashboard';
import FilmCardShimmerEffect from '../../components/Shimmer/FilmCardShimmer';
import MainCarouselOfFilmsShimmer from '../../components/Shimmer/MainCarouselOfFilmsShimmer';

// Services
import { api, apiTMDB } from '../../services/api';

// Assets
import DisneyCardImage from '../../assets/images/DisneyImage.png';
import PixarCardImage from '../../assets/images/PixarCard.png';
import MarvelCardImage from '../../assets/images/MarvelCard.png';
import StarWarsCardImage from '../../assets/images/StarWarsCard.png';
import NationalGeographicCardImage from '../../assets/images/NationalGeographicCard.png';
import DisneyVideoCard from '../../assets/videos/DisneyVideo.mp4';
import PixarVideoCard from '../../assets/videos/PixarVideo.mp4';
import MarvelVideoCard from '../../assets/videos/MarvelVideo.mp4';
import StarWarsVideoCard from '../../assets/videos/StarWarsVideo.mp4';
import NationalGeographicVideoCard from '../../assets/videos/NationalGeoGraphicVideo.mp4';

// Stylized components
import {
  Content,
  MainCarouselOfFilmsDashboard,
  FilmCardContent,
  ContainerCarouselFilms,
} from './styles';
// import CarouselFilms from '../../components/CarouselFilms';

export type Slide = { link: string; img: string };

const Dashboard = () => {
  const {
    imageSuggestionMoviePartOne,
    imageSuggestionMoviePartTwo,
  } = useContext(CarouselContext);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);
  // // TMDB api
  // const addFilm = useCallback((id: number) => {
  //   async function loadSlides(movieId: number) {
  //     try {
  //       const responseMovie = await apiTMDB.get(`/movie/${movieId}`);
  //       const responseTv = await apiTMDB.get(`/tv/${tvId}`);
  //       setSlidesFilm(slideFilmOld => {
  //         return [
  //           ...slideFilmOld,
  //           {
  //             img: `https://image.tmdb.org/t/p/w500${responseMovie.data.poster_path}`,
  //           },
  //           {
  //             img: `https://image.tmdb.org/t/p/w500${responseTv.data.poster_path}`,
  //           },
  //         ];
  //       });
  //     } catch (error) {
  //       alert(`error: ${JSON.stringify(error)}`);
  //     }
  //   }
  //   loadSlides(id);
  // }, []);
  useEffect(() => {
    (async function loadSlides() {
      const { data } = await api.get<Slide[]>('slides');

      setSlides(data);
    })();
  }, []);

  // useEffect(() => {
  //   const filmsIds = [613911, 85271, 775996, 508442, 373571];
  //   filmsIds.forEach(filmId => {
  //     addFilm(filmId);
  //   });
  // }, [addFilm]);

  return (
    <>
      <Header />
      {isLoading ? (
        <MainCarouselOfFilmsShimmer />
      ) : (
        <MainCarouselOfFilmsDashboard>
          <Carousel slides={slides} />
        </MainCarouselOfFilmsDashboard>
      )}
      <>
        {isLoading ? (
          <FilmCardShimmerEffect />
        ) : (
          <FilmCardContent>
            <Link to="/disney-films">
              <FilmCard
                imgUrl={DisneyCardImage}
                altImg="Disney"
                videoUrl={DisneyVideoCard}
              />
            </Link>

            <Link to="/pixar-films">
              <FilmCard
                imgUrl={PixarCardImage}
                altImg="Pixar"
                videoUrl={PixarVideoCard}
              />
            </Link>
            <Link to="/marvel-films">
              <FilmCard
                imgUrl={MarvelCardImage}
                altImg="Marvel"
                videoUrl={MarvelVideoCard}
              />
            </Link>
            <Link to="/starwars-films">
              <FilmCard
                imgUrl={StarWarsCardImage}
                altImg="StarWars"
                videoUrl={StarWarsVideoCard}
              />
            </Link>

            <Link to="/national-geographic-films">
              <FilmCard
                imgUrl={NationalGeographicCardImage}
                altImg="NationalGeographic"
                videoUrl={NationalGeographicVideoCard}
              />
            </Link>
          </FilmCardContent>
        )}
      </>

      <ContainerCarouselFilms>
        <h4>Recomendados</h4>
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartOne} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartOne} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartTwo} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartTwo} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartOne} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartOne} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartTwo} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartTwo} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartOne} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartOne} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartTwo} />
        <TypesCarousel carouselImagesFilm={imageSuggestionMoviePartTwo} />
      </ContainerCarouselFilms>
    </>
  );
};

export default Dashboard;
