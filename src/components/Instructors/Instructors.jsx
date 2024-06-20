import classes from './Instructors.module.css';
import './Instructors.module.css';
import { useState } from 'react';
import { arrayWithDrivers, paragraphs } from '../../data/data';

export default function Instructors() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickNext = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + 1 === arrayWithDrivers.length) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handleClickPrev = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return arrayWithDrivers.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    const currentClass = `${classes.page} ${classes[`page__${currentIndex}`]}`;

    return (
        <section id={classes.autopark}>
            <h2 className={classes.pcNone}>Інструктори</h2>
            <div className={classes.owlCarousel}>
                <div className={classes.owlItem}>
                    <div className={currentClass}>
                        <div className={classes.content}>
                            <div className={classes.row}>
                                <div className={classes.col}>
                                    <h1 className={classes.pc}>
                                        Наші інструктори
                                    </h1>
                                </div>
                            </div>

                            <div className={classes.row}>
                                <div className={classes.col}>
                                    <div className={classes.title}>
                                        {arrayWithDrivers[currentIndex]}
                                    </div>
                                    {paragraphs.map((text, index) => (
                                        <p
                                            key={index}
                                            style={{
                                                display:
                                                    index === currentIndex
                                                        ? 'block'
                                                        : 'none',
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: text,
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className={classes.col}>
                                    <div className={classes.__btn}>
                                        Хочу до цього інструктора
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
