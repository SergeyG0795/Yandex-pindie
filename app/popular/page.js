'use client';
import CardList from "@/app/components/CardsList/CardList";
import {endpoints} from "@/app/api/config";
import {useGetDataByCategory} from "@/app/api/api-hooks";
import {Preloader} from "@/app/components/Preloader/Preloader";

export default function PixelGames() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    return (<main className="main-inner">
            {popularGames ? (<CardList id="popular" title="Популярные" data={popularGames}/>) : (<Preloader/>)}
        </main>);
};