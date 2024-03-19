import Styles from "./Overlay.module.css";
import {AuthForm} from "/app/components/AuthForm/AuthForm";
import {Popup} from "/app/components/Popup/Popup";

export const Overlay = (props) => {
  return (
    <div
      className={`${Styles["overlay"]} ${
        props.isOpened && Styles["overlay_is-opened"]
      }`}
      onClick={props.close}
    ></div>
  );
};