import { usePopup } from '../PopupContext/PopupContext';
import classes from './Modal__link.module.css';

export default function ModalLink() {
    const { isNavVisible, closeNav } = usePopup();

    if (!isNavVisible) return null; // Hide nav if not visible

    return (
        <div id="nav-popup" className={`${classes.popup} animated`}>
            <div className={classes.close} onClick={closeNav}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.007"
                    height="13.007"
                    viewBox="0 0 13.007 13.007"
                >
                    <g
                        id="Group_126"
                        data-name="Group 126"
                        transform="translate(-1822 -41)"
                    >
                        <rect
                            id="Rectangle_5"
                            data-name="Rectangle 5"
                            width="17.353"
                            height="1.041"
                            transform="translate(1822 53.271) rotate(-45)"
                            fill="#fff"
                        ></rect>
                        <rect
                            id="Rectangle_11"
                            data-name="Rectangle 11"
                            width="17.353"
                            height="1.041"
                            transform="translate(1834.271 54.007) rotate(-135)"
                            fill="#fff"
                        ></rect>
                    </g>
                </svg>
            </div>

            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <a href="#autopark">
                        01
                        <br />
                        <span>вибрати автомобіль</span>
                    </a>

                    <a href="#packages">
                        02
                        <br />
                        <span>вибрати програму навчання</span>
                    </a>

                    <a href="#instructors">
                        03
                        <br />
                        <span>вибрати інструктора</span>
                    </a>

                    <a href="#extras">
                        04
                        <br />
                        <span>додаткові послуги</span>
                    </a>

                    <a href="#contacts">
                        05
                        <br />
                        <span>Як з нами зв'язатися</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
