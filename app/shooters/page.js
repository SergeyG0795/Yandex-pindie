import {getGamesByCategory} from "@/app/data/data-utils";
import CardList from "@/app/components/CardsList/CardList";
import Promo from "@/app/components/Promo/Promo";

export default function Shouter() {

    const shouterGames = getGamesByCategory("shooter");


    return (
        <main className="main">
            <CardList id="shooter" title="shooter" data={shouterGames}/>
            <Promo/>
        </main>
    );
};