import Styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <a href="#" className={Styles.logo}>
                <span className={Styles['logo-name']}>pindie</span>
                <span>, XXI век</span>
            </a>
            <ul className={Styles['social-list']}>
                <li className='social-list__item'>
                    <a href="" className={`button ${Styles['social-list__link']}`}>YT</a>
                </li>
                <li className='social-list__item'>
                    <a href="" className={`button ${Styles['social-list__link']}`}>ВК</a>
                </li>
                <li className='social-list__item'>
                    <a href="" className={`button ${Styles['social-list__link']}`}>TG</a>
                </li>
            </ul>
        </footer>
    )
};