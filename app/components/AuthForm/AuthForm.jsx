"use client";

import Styles from './AuthForm.module.css';
import {useContext, useEffect, useState} from "react";
import {authorize, isResponseOk, setJWT} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";
import {AuthContext} from "@/app/context/app-context";

export const AuthForm = (props) => {
    const authContext = useContext(AuthContext);
    const [authData, setAuthData] = useState({identifier: "", password: ""});
    const [useData, setUserData] = useState(null);
    const [message, setMessage] = useState({status: null, text: null})

    const handleInput = (e) => {

        const newAuthData = authData;
        newAuthData[e.target.name] = e.target.value;
        setAuthData(newAuthData);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = await authorize(endpoints.auth, authData);
        if (isResponseOk(userData)) {
            authContext.login(userData.user, userData.jwt);
            setMessage({status: 'success', text: 'Вы авторизовались!'});
        } else {
            setMessage({status: 'error', text: 'неверные почта или пароль'});
        }
    };

    useEffect(() => {
        let timer;
        if (authContext.user) {
            timer = setTimeout(() => {
                setMessage({status: null, text: null});
                props.close();
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [authContext.user]);

    return (
        <form className={Styles['form']} onSubmit={handleSubmit}>
            <h2 className={Styles['form__title']}>Авторизация</h2>
            <div className={Styles['form__fields']}>
                <label className={Styles['form__field']}>
                    <span className={Styles['form__field-title']}>Email</span>
                    <input className={Styles['form__field-input']} type="email" placeholder="hello@world.com" name="identifier" onInput={handleInput}/>
                </label>
                <label className={Styles['form__field']}>
                    <span className={Styles['form__field-title']}>Пароль</span>
                    <input className={Styles['form__field-input']} type="password" placeholder='***********' name="password" onInput={handleInput}/>
                </label>
            </div>
            <div className={Styles['form__actions']}>
                {message.status && (
                    <p className={Styles["form__message"]}>{message.text}</p>
                )}
                <button className={Styles['form__reset']} type="reset">Очистить</button>
                <button className={Styles['form__submit']} type="submit">Войти</button>
            </div>
        </form>)
};



