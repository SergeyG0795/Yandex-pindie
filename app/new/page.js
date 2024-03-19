"use client";
import {useGetDataByCategory} from "../api/api-hooks.js";
import CardList from "../Components/CardsList/CardList";
import {endpoints} from "../api/config";
import {Preloader} from "../Components/Preloader/Preloader";

export default function newGames() {
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
        <main className="main-inner">
            {newGames ? (
                <CardList
                    id="new"
                    title="Новые"
                    data={newGames}
                />
            ) : (
                <Preloader/>
            )}
        </main>
    );
}