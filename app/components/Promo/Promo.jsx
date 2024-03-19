'use client';

import Styles from './Promo.module.css'
import {useState} from 'react';
import {useEffect} from 'react';

export default function Promo() {

    const [codeIsVisible, setCodeVisible] = useState(false);

    const handleButtonClick = () => {
        if (!codeIsVisible) {
            setCodeVisible(true);
        }
    };
    useEffect(() => {
        let timeout;
        if (codeIsVisible) {
            timeout = setTimeout(() => {
                setCodeVisible(false);
            }, 5000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [codeIsVisible]);


    return (
        <section className={Styles.container}>
            <div className='description-block'>
                <h2 className={Styles.title}>Твой промо-код</h2>
                <p className={Styles.description}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
                <button className={`button ${Styles['promo-button']}`} onClick={handleButtonClick}>
                    {codeIsVisible ? (
                        <span className={Styles["promo-code"]}>WEBTEENS10</span>
                    ) : (
                        'Получить код'
                    )}</button>
            </div>
            <img src="/images/promo-illustration.svg" alt="Собака" className={Styles.image}/>
        </section>
    )
};