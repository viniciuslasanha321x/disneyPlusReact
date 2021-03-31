import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

import Header from '../Header';
import ButtonIconsMovie from '../ButtonIconsMovie';
import ButtonPlay from '../ButtonPlay';
import Tab from '../Tab';
import { PlayIconComponent } from '../../assets/icons';
import animatedCheck from '../../assets/animations/animatedCheck.json';

import {
  ContainerWandavisionPageFilm,
  FilmInformation,
  IconLottieAnimation,
  InfoFilm,
} from './styles';

export interface ISeriesMovies {
  backgroundImage: string;
  filmLogo: string;
  genreMoviesAndClassifications: string;
  infoMovie: string;
  titlefilm: string;
  filmSummary: string;
  releaseDateInformation: string;
  genreInformation: string;
  classificationInformation: string;
  producers: string[];
}

type PropsMovieAndSerie = {
  // children: React.ReactNode;
  seriesMovies: ISeriesMovies;
  imageMoviePartOne: Array<{
    img: string;
    link: string;
  }>;
  imageMoviePartTwo: Array<{
    img: string;
    link: string;
  }>;
  imageMoviePartThree: Array<{
    img: string;
    link: string;
  }>;
  disableEpisodiesTab?: boolean;
  disableEpisodies?: boolean;
};

const MovieAndSeriePage = ({
  // children,
  seriesMovies,
  imageMoviePartOne,
  imageMoviePartTwo,
  imageMoviePartThree,
  disableEpisodiesTab,
  disableEpisodies = false,
}: PropsMovieAndSerie) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChangeBackground = () => {
    if (window.scrollY >= 4) {
      return setIsScrolled(true);
    }
    return setIsScrolled(false);
  };

  // useEffect(() => {
  //   setMvseries(readfile());
  // }, []);

  window.addEventListener('scroll', handleChangeBackground);

  return (
    <>
      <Header />
      <ContainerWandavisionPageFilm isScrolled={isScrolled}>
        <div className="featuredVertical">
          <div className="featuredHorizontal">
            <img
              className="background_img"
              src={seriesMovies.backgroundImage}
              alt="teste"
            />
            <FilmInformation>
              <img
                className="logoFilm_img"
                src={seriesMovies.filmLogo}
                alt="logo"
              />
              <div className="containerButton">
                <ButtonPlay variant="withBackground">
                  <PlayIconComponent />
                  Assistir
                </ButtonPlay>
                <ButtonPlay>
                  <PlayIconComponent />
                  Trailer
                </ButtonPlay>
                <ButtonIconsMovie>
                  <IconLottieAnimation>
                    <Lottie
                      options={{
                        loop: false,
                        autoplay: true,
                        animationData: animatedCheck,
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice',
                        },
                      }}
                      height={75}
                      width={75}
                    />
                  </IconLottieAnimation>
                </ButtonIconsMovie>
              </div>
              <InfoFilm>
                <p className="genreMovie">
                  {seriesMovies.genreMoviesAndClassifications}
                  {/* {children} */}
                </p>
                <p className="infoMovie">
                  {seriesMovies.infoMovie}
                  {/* {children} */}
                </p>
              </InfoFilm>
            </FilmInformation>
            <div className="tabInformationMovie">
              <Tab
                slideMoviePartOne={imageMoviePartOne}
                slideMoviePartTwo={imageMoviePartTwo}
                slideMoviePartThree={imageMoviePartThree}
                titleFilm={seriesMovies.titlefilm}
                filmSummary={seriesMovies.filmSummary}
                releaseDateInformation={seriesMovies.releaseDateInformation}
                genreInformation={seriesMovies.genreInformation}
                classificationInformation={
                  seriesMovies.classificationInformation
                }
                producers={seriesMovies.producers}
                disableEpisodies={disableEpisodiesTab}
              />
            </div>
          </div>
        </div>
      </ContainerWandavisionPageFilm>
    </>
  );
};

export default MovieAndSeriePage;
