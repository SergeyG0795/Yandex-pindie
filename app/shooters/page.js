'use client';
import CardsListSection from "@/app/components/CardsListSection/CardsListSection";
import {endpoints} from "@/app/api/config";
import {useGetDataByCategory} from "@/app/api/api-hooks";
import {Preloader} from "@/app/components/Preloader/Preloader";

export default function Shouter() {
    const shouterGames = useGetDataByCategory(endpoints.games, "runner");
    return (<main className="main-inner">
        {shouterGames ? (<CardsListSection id="shooter" title="shooter" data={shouterGames}/>) : (<Preloader/>)}
    </main>);
};