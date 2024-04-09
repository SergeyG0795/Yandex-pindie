import Styles from './CardsListSection.module.css'
import {CardsList} from "./CardsList";
import {CardsSlider} from "./CardsSlider";

export default function CardsListSection(props) {

    return (
        <section className={Styles['list-section']}>
            <h2 className={Styles['list-title']} id={props.id}>
                {props.title}
            </h2>
            {props.type === 'slider' ? <CardsSlider data={props.data}/> : <CardsList data={props.data}/>}
        </section>
    )
};

