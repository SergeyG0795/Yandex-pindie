import {getGamesByCategory} from "@/app/data/data-utils";
import CardList from "@/app/components/CardsList/CardList";
import Promo from "@/app/components/Promo/Promo";

export default function PixelGames() {

    const pixelGames = getGamesByCategory("pixel");


    return (
        <main className="main">
            <CardList id="pixel" title="pixel" data={pixelGames}/>
            <Promo/>
        </main>
    );
};