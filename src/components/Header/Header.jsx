import classes from './Header.module.css';
import { usePopup } from '../PopupContext/PopupContext';

import phone from '/src/assets/phone.svg';
import logo from '/src/assets/logo.svg';
import burger from '/src/assets/burger.svg';

export default function Header() {
    const { openPopup, openNav } = usePopup();

    return (
        <header>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <a id="open-popup" className="side" onClick={openPopup}>
                        <img src={phone} alt="" />
                    </a>
                    <a href="">
                        <img src={logo} alt="" />
                    </a>
                    <a id="open-nav" className="side" onClick={openNav}>
                        <img src={burger} alt="" />
                    </a>
                </div>
            </div>
        </header>
    );
}
