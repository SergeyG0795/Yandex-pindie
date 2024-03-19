'use client';
import CardList from "@/app/components/CardsList/CardList";
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";

export default async function New() {

    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new");


    return (

        <CardList id="new" title="Новинки" data={newGames}/>

    );
};