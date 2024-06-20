import classes from './Autopark.module.css';
import './Autopark.module.css';
import { useState } from 'react';
import { arrayWithNames } from '../../data/data';

import item1 from '/src/assets/autopark-1.svg';
import item2 from '/src/assets/autopark-2.svg';
import item3 from '/src/assets/autopark-3.svg';
import item4 from '/src/assets/autopark-4.svg';

export default function Autopark() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickNext = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + 1 === arrayWithNames.length) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handleClickPrev = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return arrayWithNames.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    const currentClass = `${classes.page} ${classes[`page__${currentIndex}`]}`;

    return (
        <section id={classes.autopark}>
            <h1 className={classes.pcNone}>Наш автопарк</h1>
            <div className={classes.owlCarousel}>
                <div className={classes.owlItem}>
                    <div className={currentClass}>
                        <div className={classes.content}>
                            <div className={classes.row}>
                                <div className={classes.col}>
                                    <h1 className={classes.pc}>Наш автопарк</h1>
                                    <div className={classes.bullets}>
                                        <div className={classes.bullet__row}>
                                            <div
                                                className={classes.bullet__item}
                                            >
                                                <img src={item1} />
                                                <p>
                                                    Заняття з нами -<br />
                                                    <span>
                                                        максимальна
                                                        продуктивність
                                                    </span>
                                                </p>
                                            </div>
                                            <div
                                                className={classes.bullet__item}
                                            >
                                                <img src={item2} />
                                                <p>
                                                    Мінімальна тривалість <br />
                                                    заняття
                                                    <span> 2 години</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={classes.bullet__row}>
                                            <div
                                                className={classes.bullet__item}
                                            >
                                                <img src={item3} />
                                                <p>
                                                    Тривалість максимально
                                                    продуктивного заняття
                                                    <br />
                                                    <span>2 години</span>
                                                </p>
                                            </div>
                                            <div
                                                className={classes.bullet__item}
                                            >
                                                <img src={item4} />
                                                <p>
                                                    1 година АКПП =
                                                    <span>
                                                        1100 / 1300 / 1500 грн
                                                    </span>
                                                    <br />1 година МКПП =
                                                    <span> 850 грн</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`${classes.row} ${classes.rowMobile}`}
                            >
                                <div className={classes.col}>
                                    <div className={classes.__btn}>
                                        Забронювати перше заняття
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
                                    </div>
                                </div>
                                <div className={classes.col}>
                                    <div className={classes.title}>
                                        {arrayWithNames[currentIndex]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.owlNav}>
                    <button
                        className={classes.owlPrev}
                        onClick={handleClickPrev}
                    >
                        <div className={classes.arrowL}></div>
                    </button>
                    <button
                        className={classes.owlNext}
                        onClick={handleClickNext}
                    >
                        <div className={classes.arrowR}></div>
                    </button>
                </div>
            </div>
        </section>
    );
}
