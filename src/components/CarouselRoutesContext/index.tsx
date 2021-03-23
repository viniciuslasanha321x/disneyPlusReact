import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { api, apiTMDB } from '../../services/api';

export type Slide = { link: string; img: string };

interface CarouselContextProps {
  children: ReactNode;
}

interface Context {
  imageSuggestionMoviePartOne: Slide[];
  imageSuggestionMoviePartTwo: Slide[];
}

export const CarouselContext = createContext<Context>({
  imageSuggestionMoviePartOne: [],
  imageSuggestionMoviePartTwo: [],
});

export function CarouselRoutesContext({ children }: CarouselContextProps) {
  const [
    imageSuggestionMoviePartOne,
    setImageSuggestionMoviePartOne,
  ] = useState<Slide[]>([]);
  const [
    imageSuggestionMoviePartTwo,
    setImageSuggestionMoviePartTwo,
  ] = useState<Slide[]>([]);

  useEffect(() => {
    (async function loadSlides() {
      const { data: dataRecommendedCategoryImages } = await api.get<Slide[]>(
        'recommendedcategoryimages',
      );
      const { data: data4 } = await api.get<Slide[]>('wandavisionimagespartwo');
      setImageSuggestionMoviePartOne(dataRecommendedCategoryImages);
      setImageSuggestionMoviePartTwo(data4);
    })();
  }, []);

  return (
    <CarouselContext.Provider
      value={{ imageSuggestionMoviePartOne, imageSuggestionMoviePartTwo }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

export default CarouselRoutesContext;
