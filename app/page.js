"use client";

import { endpoints } from "./api/config";
import Banner from "./components/Banner/Banner";
import CardsListSection from "./components/CardsListSection/CardsListSection";
import Promo from "./components/Promo/Promo";
import { useGetDataByCategory } from "./api/api-hooks";
import { Preloader } from "./components/Preloader/Preloader";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main>
      {popularGames && newGames ? (
        <>
          <Banner />
          <CardsListSection
            type="slider"
            id="popular"
            title="Популярные"
            data={popularGames}
          />
          <CardsListSection
            type="slider"
            id="new"
            title="Новинки"
            data={newGames}
          />
          <Promo />
        </>
      ) : (
        <Preloader />
      )}
    </main>
  );
}