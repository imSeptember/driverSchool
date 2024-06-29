import classes from './Thanks.module.css';
import { useEmail } from '../Context/EmailContext';

export default function Thanks() {
    const { isEmailSent } = useEmail();
    return (
        <section
            className={classes.thanks}
            style={{ display: isEmailSent ? 'block' : 'none' }}
        >
            <div className={classes.wrapper}>
                <h1>Дякую,</h1>
                <h2>Ваша заявка прийнята</h2>
                <a href="/" className={classes.__btn}>
                    Повернутися на головну
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="90"
                        height="90"
                        viewBox="0 0 90 90"
                    >
                        <g
                            id="Group_231"
                            data-name="Group 231"
                            transform="translate(90.5 90) rotate(180)"
                        >
                            <g
                                id="Ellipse_16"
                                data-name="Ellipse 16"
                                transform="translate(0.5)"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="4"
                            >
                                <circle
                                    cx="45"
                                    cy="45"
                                    r="45"
                                    stroke="none"
                                ></circle>
                                <circle
                                    cx="45"
                                    cy="45"
                                    r="43"
                                    fill="none"
                                ></circle>
                            </g>
                            <g
                                id="Group_177"
                                data-name="Group 177"
                                transform="translate(30 41)"
                            >
                                <rect
                                    id="Rectangle_17"
                                    data-name="Rectangle 17"
                                    width="28"
                                    height="4"
                                    transform="translate(7.369 2)"
                                    fill="#fff"
                                ></rect>
                                <path
                                    id="Polygon_2"
                                    data-name="Polygon 2"
                                    d="M5,0l5,12H0Z"
                                    transform="translate(-3.5 9) rotate(-90)"
                                    fill="#fff"
                                ></path>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </section>
    );
}
