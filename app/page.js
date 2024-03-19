import Banner from "./components/Banner/Banner";
import Promo from "./components/Promo/Promo";
import CardList from "@/app/components/CardsList/CardList";
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";

export default async function Home() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, 'popular')
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, 'new')

    return (
        <main className="main">
            <Banner/>
            <CardList id='popular' title="Популярные" data={popularGames}/>
            <CardList id='new' title="Новинки" data={newGames}/>
            <Promo/>
        </main>

    );
};

