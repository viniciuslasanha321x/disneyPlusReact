import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../../services/api';

export type Slide = { link: string; img: string };

interface CarouselContextProps {
  children: ReactNode;
}

interface Context {
  recommendedTendenciesImagesDashboard: Slide[];
}

export const CarouselContextCardDashboard = createContext<Context>({
  recommendedTendenciesImagesDashboard: [],
});

export function CarouselRoutesContextCardDashboard({
  children,
}: CarouselContextProps) {
  const [
    recommendedTendenciesImagesDashboard,
    setRecommendedtendenciesimagesdashboard,
  ] = useState<Slide[]>([]);

  useEffect(() => {
    (async function loadSlides() {
      const { data: dataRecommendedTendenciesImagesDashboard } = await api.get<
        Slide[]
      >('recommendedtendenciesimagesdashboard');

      setRecommendedtendenciesimagesdashboard(
        dataRecommendedTendenciesImagesDashboard,
      );
    })();
  }, []);

  return (
    <CarouselContextCardDashboard.Provider
      value={{
        recommendedTendenciesImagesDashboard,
      }}
    >
      {children}
    </CarouselContextCardDashboard.Provider>
  );
}

export default CarouselRoutesContextCardDashboard;
