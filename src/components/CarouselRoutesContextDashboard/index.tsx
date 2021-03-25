import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../../services/api';

export type Slide = { link: string; img: string };

interface CarouselContextProps {
  children: ReactNode;
}

interface Context {
  recommendedTendenciesImagesDashboard: Slide[];
  imagesNewsAtDisneyPlusDashboard: Slide[];
  originalDashboardImages: Slide[];
  oscarWinnerImagesDashboard: Slide[];
  sportsImagesDashboard: Slide[];
  pictureInspiredByBooksDashboard: Slide[];
  actionAndAdventureImagesDashboard: Slide[];
  imagesMusicAndDanceDashboard: Slide[];
  protagonistWomenImagesDashboard: Slide[];
}

export const CarouselContextDashboard = createContext<Context>({
  recommendedTendenciesImagesDashboard: [],
  imagesNewsAtDisneyPlusDashboard: [],
  originalDashboardImages: [],
  oscarWinnerImagesDashboard: [],
  sportsImagesDashboard: [],
  pictureInspiredByBooksDashboard: [],
  actionAndAdventureImagesDashboard: [],
  imagesMusicAndDanceDashboard: [],
  protagonistWomenImagesDashboard: [],
});

export function CarouselRoutesContextDashboard({
  children,
}: CarouselContextProps) {
  const [
    recommendedTendenciesImagesDashboard,
    setRecommendedtendenciesimagesdashboard,
  ] = useState<Slide[]>([]);

  const [
    imagesNewsAtDisneyPlusDashboard,
    setImagesNewsAtDisneyPlusDashboard,
  ] = useState<Slide[]>([]);

  const [originalDashboardImages, setOriginalDashboardImages] = useState<
    Slide[]
  >([]);

  const [oscarWinnerImagesDashboard, setOscarWinnerImagesDashboard] = useState<
    Slide[]
  >([]);

  const [sportsImagesDashboard, setSportsImagesDashboard] = useState<Slide[]>(
    [],
  );

  const [
    pictureInspiredByBooksDashboard,
    setPictureInspiredByBooksDashboard,
  ] = useState<Slide[]>([]);

  const [
    actionAndAdventureImagesDashboard,
    setActionAndAdventureImagesDashboard,
  ] = useState<Slide[]>([]);

  const [
    imagesMusicAndDanceDashboard,
    setImagesMusicAndDanceDashboard,
  ] = useState<Slide[]>([]);

  const [
    protagonistWomenImagesDashboard,
    setProtagonistWomenImagesDashboard,
  ] = useState<Slide[]>([]);

  useEffect(() => {
    (async function loadSlides() {
      const { data: dataRecommendedTendenciesImagesDashboard } = await api.get<
        Slide[]
      >('recommendedtendenciesimagesdashboard');

      const { data: dataNewsAtDisneyPlusImagesDashboard } = await api.get<
        Slide[]
      >('newsatdisneyplusimagesdashboard');

      const { data: dataOriginalDashboardImages } = await api.get<Slide[]>(
        'originaldashboardimages',
      );

      const { data: dataOscarWinnerImagesDashboard } = await api.get<Slide[]>(
        'oscarwinnerimagesdashboard',
      );

      const { data: dataSportsImagesDashboard } = await api.get<Slide[]>(
        'sportsimagesdashboard',
      );

      const { data: dataPictureInspiredByBooksDashboard } = await api.get<
        Slide[]
      >('pictureinspiredbybooksdashboard');

      const { data: dataActionAndAdventureImagesDashboard } = await api.get<
        Slide[]
      >('actionandadventureimagesdashboard');

      const { data: dataImagesMusicAndDanceDashboard } = await api.get<Slide[]>(
        'imagesmusicanddancedashboard',
      );

      const { data: dataProtagonistWomenImagesDashboard } = await api.get<
        Slide[]
      >('protagonistwomenimagesdashboard');

      setRecommendedtendenciesimagesdashboard(
        dataRecommendedTendenciesImagesDashboard,
      );
      setImagesNewsAtDisneyPlusDashboard(dataNewsAtDisneyPlusImagesDashboard);
      setOriginalDashboardImages(dataOriginalDashboardImages);
      setOscarWinnerImagesDashboard(dataOscarWinnerImagesDashboard);
      setSportsImagesDashboard(dataSportsImagesDashboard);
      setPictureInspiredByBooksDashboard(dataPictureInspiredByBooksDashboard);
      setActionAndAdventureImagesDashboard(
        dataActionAndAdventureImagesDashboard,
      );
      setImagesMusicAndDanceDashboard(dataImagesMusicAndDanceDashboard);
      setProtagonistWomenImagesDashboard(dataProtagonistWomenImagesDashboard);
    })();
  }, []);

  return (
    <CarouselContextDashboard.Provider
      value={{
        recommendedTendenciesImagesDashboard,
        imagesNewsAtDisneyPlusDashboard,
        originalDashboardImages,
        oscarWinnerImagesDashboard,
        sportsImagesDashboard,
        pictureInspiredByBooksDashboard,
        actionAndAdventureImagesDashboard,
        imagesMusicAndDanceDashboard,
        protagonistWomenImagesDashboard,
      }}
    >
      {children}
    </CarouselContextDashboard.Provider>
  );
}

export default CarouselRoutesContextDashboard;
