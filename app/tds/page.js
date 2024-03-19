import {getGamesByCategory} from "@/app/data/data-utils";
import CardList from "@/app/components/CardsList/CardList";
import Promo from "@/app/components/Promo/Promo";

export default function Tds() {

    const tdsGames = getGamesByCategory("TDS");


    return (
        <main className="main">
            <CardList id="tds" title="tds" data={tdsGames}/>
            <Promo/>
        </main>
    );
};