import React, { useState } from 'react';

import TypesCarousel from '../TypesCarousel';

import {
  Container,
  BlocTabs,
  TabButton,
  ContentTabs,
  FilmInfo,
  FilmSummary,
  AdditionalInformationMovie,
  ContentOne,
  ContentTwo,
} from './styles';

export type Slide = { link: string; img: string };

interface PropsTabMovie {
  children: React.ReactNode;
  titleFilm: string;
  filmSummary: string;
  releaseDateInformation: string;
  genreInformation: string;
  classificationInformation: string;
  firstPersonCast: string;
  secondPersonCast: string;
  thirdPersonCast: string;
  fourthPersonCast: string;
  fifthPersonCast: string;
  slideMoviePartOne: Array<{
    img: string;
    link: string;
  }>;
  slideMoviePartTwo: Array<{
    img: string;
    link: string;
  }>;
  slideMoviePartThree: Array<{
    img: string;
    link: string;
  }>;
  disableEpisodies?: boolean;
}

const Tab = ({
  children,
  titleFilm,
  filmSummary,
  releaseDateInformation,
  genreInformation,
  classificationInformation,
  firstPersonCast,
  secondPersonCast,
  thirdPersonCast,
  fourthPersonCast,
  fifthPersonCast,
  slideMoviePartOne,
  slideMoviePartTwo,
  slideMoviePartThree,
  disableEpisodies = false,
}: PropsTabMovie) => {
  const [toggleState, setToggleState] = useState(disableEpisodies ? 2 : 1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <Container>
      <BlocTabs>
        {!disableEpisodies && (
          <div className="teste">
            <TabButton
              onClick={() => toggleTab(1)}
              isFocused={toggleState === 1}
              type="button"
            >
              episódios
            </TabButton>
          </div>
        )}
        <TabButton
          onClick={() => toggleTab(2)}
          isFocused={toggleState === 2}
          type="button"
        >
          sugestões
        </TabButton>
        <TabButton
          onClick={() => toggleTab(3)}
          isFocused={toggleState === 3}
          type="button"
        >
          extras
        </TabButton>
        <TabButton
          onClick={() => toggleTab(4)}
          isFocused={toggleState === 4}
          type="button"
        >
          detalhes
        </TabButton>
      </BlocTabs>

      <ContentTabs>
        <div className="containerContentTabs">
          <div
            className={
              toggleState === 1 ? 'content  active-content' : 'content'
            }
          >
            {!disableEpisodies && (
              <>
                <h2>Temporada 1</h2>
                <TypesCarousel carouselImagesFilm={slideMoviePartOne} />
              </>
            )}
          </div>
          <div
            className={
              toggleState === 2 ? 'content  active-content' : 'content'
            }
          >
            <h2>Sugestões Para Você</h2>
            <TypesCarousel carouselImagesFilm={slideMoviePartTwo} />
          </div>
          <div
            className={
              toggleState === 3 ? 'content  active-content' : 'content'
            }
          >
            <h2>Content 3</h2>
            <TypesCarousel carouselImagesFilm={slideMoviePartThree} />
          </div>
          <div
            className={
              toggleState === 4 ? 'content  active-content' : 'content'
            }
          >
            <FilmInfo>
              <FilmSummary>
                <h3>{titleFilm}</h3>
                {children}
                <p>{filmSummary}</p>
                {children}
              </FilmSummary>
              <AdditionalInformationMovie>
                <ContentOne>
                  <div className="release">
                    <p>Data de lançamento:</p>
                    <span>{releaseDateInformation}</span>
                    {children}
                  </div>
                  <div className="genre">
                    <p>Género:</p>
                    <span>{genreInformation}</span>
                    {children}
                  </div>
                  <div className="classification">
                    <p>Classificação:</p>
                    <span>{classificationInformation}</span>
                    {children}
                  </div>
                </ContentOne>
                <ContentTwo>
                  <div className="cast">
                    <p>Elenco:</p>
                    <span>{firstPersonCast}</span>
                    {children}
                    <span>{secondPersonCast}</span>
                    {children}
                    <span>{thirdPersonCast}</span>
                    {children}
                    <span>{fourthPersonCast}</span>
                    {children}
                    <span>{fifthPersonCast}</span>
                    {children}
                  </div>
                </ContentTwo>
              </AdditionalInformationMovie>
            </FilmInfo>
          </div>
        </div>
      </ContentTabs>
    </Container>
  );
};

export default Tab;
