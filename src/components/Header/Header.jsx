import classes from './Header.module.css';
import { usePopup } from '../PopupContext/PopupContext';

export default function Header() {
    const { openPopup } = usePopup();
    return (
        <header>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <a id="open-popup" className="side" onClick={openPopup}>
                        <img src="src/assets/phone.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="src/assets/logo.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="src/assets/burger.svg" alt="" />
                    </a>
                </div>
            </div>
        </header>
    );
}
