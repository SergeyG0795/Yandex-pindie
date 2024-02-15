import Styles from './CardList.module.css'
import Card from "/app/components/Card/Card";

export default function CardList(props) {
    return (
        <section className={Styles['list-section']}>
            <h2 className={Styles['list-title']} id={props.id}>
                {props.title}
            </h2>
            <ul className={Styles['cards-list']}>
                {props.data.map((item) => {
                    return (
                        <li className={Styles['card-list__item']} key={item.id}>
                            <a href={item.link} target='_blank' className={Styles.link}>
                                <Card {...item} />
                            </a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
};

