"use client";
import {useGetDataByCategory} from "../api/api-hooks.js";
import CardsListSection from "@/app/components/CardsListSection/CardsListSection";
import {endpoints} from "../api/config";
import {Preloader} from "../components/Preloader/Preloader";

export default function newGames() {
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
        <main className="main-inner">
            {newGames ? (
                <CardsListSection
                    type="slider"
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