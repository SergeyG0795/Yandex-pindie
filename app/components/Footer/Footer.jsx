'use client';

import Styles from './Footer.module.css'
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function Footer() {

    const pathname = usePathname();
    const LogoFooterImage = (<div className={Styles.logo}>
        <span className={Styles['logo-name']}>pindie</span>
        <span>, XXI век</span>
    </div>);

    const LogoFooterLink = (<Link href="/" className={Styles.logo}>
        {LogoFooterImage}
    </Link>);


    return (<footer className={Styles.footer}>
        {pathname === "/" ? LogoFooterImage : LogoFooterLink}
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
    </footer>)
};