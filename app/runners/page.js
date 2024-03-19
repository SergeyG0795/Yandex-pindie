import {getGamesByCategory} from "@/app/data/data-utils";
import CardList from "@/app/components/CardsList/CardList";
import Promo from "@/app/components/Promo/Promo";

export default function Runners() {

    const runnerGames = getGamesByCategory("runner");


    return (
        <main className="main">
            <CardList id="runner" title="runner" data={runnerGames}/>
            <Promo/>
        </main>
    );
};