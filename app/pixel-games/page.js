'use client';
import CardList from "@/app/components/CardsList/CardList";
import {endpoints} from "@/app/api/config";
import {useGetDataByCategory} from "@/app/api/api-hooks";
import {Preloader} from "@/app/components/Preloader/Preloader";

export default function PixelGames() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
    return (<main className="main-inner">
        {pixelGames ? (<CardList id="pixel" title="pixel" data={pixelGames}/>) : (<Preloader/>)}
    </main>);
};

