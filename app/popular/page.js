'use client';

import CardList from "@/app/components/CardsList/CardList";
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";

export default async function Popular() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");


    return (

        <CardList id="popular" title="Популярные" data={popularGames}/>

    );
};