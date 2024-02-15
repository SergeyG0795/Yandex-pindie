import Banner from "./components/Banner/Banner";
import Promo from "./components/Promo/Promo";
import {getGamesByCategory} from '/app/data/data-utils'
import CardList from './components/CardsList/CardList';

export default function Home() {

    const popularGames = getGamesByCategory("popular");
    const newGames = getGamesByCategory("new");


    return (
        <main className="main">
            <Banner/>
            <CardList id="popular" title="Популярные" data={popularGames}/>
            <CardList id="new" title="Новинки" data={newGames}/>
            <Promo/>
        </main>
    );
};