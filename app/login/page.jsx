import {AuthForm} from "../components/AuthForm/AuthForm"
import Styles from "./login.module.css";

export default function Page() {
    return (
        <main className={Styles['main']}>
            <AuthForm/>
        </main>
    )
}