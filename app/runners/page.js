'use client';
import CardsListSection from "@/app/components/CardsListSection/CardsListSection";
import {endpoints} from "@/app/api/config";
import {useGetDataByCategory} from "@/app/api/api-hooks";
import {Preloader} from "@/app/components/Preloader/Preloader";

export default function Runners() {
    const runnerGames = useGetDataByCategory(endpoints.games, "runner");
    return (<main className="main-inner">
        {runnerGames ? (<CardsListSection id="runner" title="runner" data={runnerGames}/>) : (<Preloader/>)}
    </main>);
};