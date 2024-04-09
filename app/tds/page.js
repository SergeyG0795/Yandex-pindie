'use client';
import CardsListSection from "@/app/components/CardsListSection/CardsListSection";
import {endpoints} from "@/app/api/config";
import {useGetDataByCategory} from "@/app/api/api-hooks";
import {Preloader} from "@/app/components/Preloader/Preloader";

export default function Tds() {
    const tdsGames = useGetDataByCategory(endpoints.games, "runner");
    return (<main className="main-inner">
        {tdsGames ? (<CardsListSection id="tds" title="tds" data={tdsGames}/>) : (<Preloader/>)}
    </main>);
};