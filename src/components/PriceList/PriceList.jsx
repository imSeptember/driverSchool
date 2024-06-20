import classes from './PriceList.module.css';

export default function PriceList() {
    return (
        <section id={classes.priceList}>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <div className={classes.col}>
                        <div className={classes.list__item}>
                            <h2>Курс теорії у класі</h2>
                            <h2>
                                <span>15 000 ₴</span>
                            </h2>
                        </div>
                        <div className={classes.list__item}>
                            <h2>Курс теорії online + online підтримка</h2>
                            <h2>
                                <span>8 500 ₴</span>
                            </h2>
                        </div>
                        <div className={classes.list__item}>
                            <h2>
                                1 година навчання за курсом "Повсякденне водіння
                                АКПП"
                            </h2>
                            <h2>
                                <span>
                                    700 ₴ - Ваша машина
                                    <br />
                                    1100 / 1300 / 1500 ₴ - <br />
                                    машина школи
                                </span>
                            </h2>
                        </div>
                        <div className={classes.list__item}>
                            <h2>
                                1 година навчання за курсом "Повсякденне водіння
                                МКПП"
                            </h2>
                            <h2>
                                <span>850 ₴ - машина школи</span>
                            </h2>
                        </div>
                        <div className={classes.list__item}>
                            <h2>
                                1 година навчання за курсом "Екстремальне
                                водіння"
                            </h2>
                            <h2>
                                <span>3700 ₴ - машина школи</span>
                            </h2>
                        </div>
                        <div className={classes.list__item}>
                            <h2>
                                Водіння для дітей (до 17 років, зріст від 140
                                см)
                            </h2>
                            <h2>
                                <span>
                                    800 ₴ - Ваша машина
                                    <br />
                                    1000 ₴ - машина школи
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <h1>
                            <span>Ви можете придбати</span>
                            <br />
                            подарунковий сертифікат <br />
                            <span>на будь-яку послугу або курс.</span>
                        </h1>
                        <h3>
                            Подаруйте спокій собі <br />
                            та безпеку дорогій Вам людині!
                        </h3>
                        <div className={classes.pushTop}></div>
                        <div
                            className={`${classes.btn} ${classes.btnDark}`}
                            data="GENERAL"
                        >
                            Залишити заявку
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
