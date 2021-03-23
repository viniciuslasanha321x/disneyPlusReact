import React, { useState } from 'react';
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

type PropsMovieAndSerie = {
  children: React.ReactNode;
  backgroundImage: string;
  filmLogo: string;
  genreMoviesAndClassifications: string;
  infoMovie: string;
  titlefilm: string;
  filmSummary: string;
  releaseDateInformation: string;
  genreInformation: string;
  classificationInformation: string;
  firstPersonCast: string;
  secondPersonCast: string;
  thirdPersonCast: string;
  fourthPersonCast: string;
  fifthPersonCast: string;
  imageMoviePartOne: Array<{
    img: string;
  }>;
  imageMoviePartTwo: Array<{
    img: string;
  }>;
  imageSuggestionMoviePartOne: Array<{
    img: string;
  }>;
  imageSuggestionMoviePartTwo: Array<{
    img: string;
  }>;
};

const MovieAndSeriePage = ({
  children,
  backgroundImage,
  filmLogo,
  genreMoviesAndClassifications,
  infoMovie,
  titlefilm,
  filmSummary,
  releaseDateInformation,
  genreInformation,
  classificationInformation,
  firstPersonCast,
  secondPersonCast,
  thirdPersonCast,
  fourthPersonCast,
  fifthPersonCast,
  imageMoviePartOne,
  imageMoviePartTwo,
  imageSuggestionMoviePartOne,
  imageSuggestionMoviePartTwo,
}: PropsMovieAndSerie) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChangeBackground = () => {
    if (window.scrollY >= 4) {
      return setIsScrolled(true);
    }
    return setIsScrolled(false);
  };

  window.addEventListener('scroll', handleChangeBackground);

  return (
    <>
      <Header />
      <ContainerWandavisionPageFilm isScrolled={isScrolled}>
        <div className="featuredVertical">
          <div className="featuredHorizontal">
            <img className="background_img" src={backgroundImage} alt="teste" />
            <FilmInformation>
              <img className="logoFilm_img" src={filmLogo} alt="logo" />
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
                  {genreMoviesAndClassifications}
                  {children}
                </p>
                <p className="infoMovie">
                  {infoMovie}
                  {children}
                </p>
              </InfoFilm>
            </FilmInformation>
            <div className="tabInformationMovie">
              <Tab
                slideMoviePartOne={imageMoviePartOne}
                titleFilm={titlefilm}
                filmSummary={filmSummary}
                releaseDateInformation={releaseDateInformation}
                genreInformation={genreInformation}
                classificationInformation={classificationInformation}
                firstPersonCast={firstPersonCast}
                secondPersonCast={secondPersonCast}
                thirdPersonCast={thirdPersonCast}
                fourthPersonCast={fourthPersonCast}
                fifthPersonCast={fifthPersonCast}
              />
            </div>
          </div>
        </div>
      </ContainerWandavisionPageFilm>
    </>
  );
};

export default MovieAndSeriePage;
