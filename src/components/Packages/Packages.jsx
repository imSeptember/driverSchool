import classes from './Packages.module.css';

export default function Packages() {
    return (
        <section id={classes.packages}>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <h1>
                        Пакети курсу <span>"Повсякденне водіння"</span>
                    </h1>
                    <div className={classes.packagesRow}>
                        <div className={classes.packagesItem}>
                            <h2>LOW</h2>
                            <h3>
                                <span>5</span> занять (<span>10</span> годин){' '}
                            </h3>
                            <p>
                                У <span>подарунок 30 хвилин</span> рульожки (на
                                автотренажері у класі)
                            </p>
                            <p>
                                Discount <span>5%</span>
                                на керування <span>машиною учня</span>
                            </p>
                            <p>
                                Discount <span>5%</span> на пробне заняття з{' '}
                                <span>контраварійної підготовки</span>
                            </p>
                            <div className="push-top"></div>
                            <p>
                                АКПП - <span>10450 / 12350 / 14250 грн</span>
                                <br />
                                МКПП - <span>8075 грн</span>
                                <br />
                            </p>
                            <div className={classes.btn} data="LOW">
                                Залишити заявку
                            </div>
                        </div>
                        <div className={classes.packagesItem}>
                            <h2>MEDIUM</h2>
                            <h3>
                                <span>10</span> занять (<span>20</span> годин){' '}
                            </h3>
                            <p>
                                У <span>подарунок 60 хвилин</span> рульожки (на
                                автотренажері у класі)
                            </p>
                            <p>
                                Discount <span>6%</span>
                                на керування <span>машиною учня</span>
                            </p>
                            <p>
                                Discount <span>6%</span> на пробне заняття з{' '}
                                <span>контраварійної підготовки</span>
                            </p>
                            <div className="push-top"></div>
                            <p>
                                АКПП - <span>20680 / 24400 / 28200 грн</span>
                                <br />
                                МКПП - <span>15980 грн</span>
                                <br />
                            </p>
                            <div className={classes.btn} data="MEDIUM">
                                Залишити заявку
                            </div>
                        </div>

                        <div
                            className={`${classes.packagesItem} ${classes.top}`}
                        >
                            <h2>HIGH</h2>
                            <h3>
                                <span>15</span> занять (<span>30</span> годин){' '}
                            </h3>
                            <p>
                                У <span>подарунок 90 хвилин</span> рульожки (на
                                автотренажері у класі)
                            </p>
                            <p>
                                Discount <span>7%</span>
                                на керування <span>машиною учня</span>
                            </p>
                            <p>
                                Discount <span>7%</span> на пробне заняття з{' '}
                                <span>контраварійної підготовки</span>
                            </p>
                            <div className="push-top"></div>
                            <p>
                                АКПП - <span>30690 / 36270 / 41850 грн</span>
                                <br />
                                МКПП - <span>23715 грн</span>
                                <br />
                            </p>
                            <div className={classes.btn} data="HIGH">
                                Залишити заявку
                            </div>
                        </div>

                        <div className={classes.packagesItem}>
                            <h2>MAX</h2>
                            <h3>
                                <span>20</span> занять (<span>40</span> годин){' '}
                            </h3>
                            <p>
                                У <span>подарунок 90 хвилин</span> рульожки (на
                                автотренажері у класі)
                            </p>
                            <p>
                                Discount <span>8%</span>
                                на керування <span>машиною учня</span>
                            </p>
                            <p>
                                Discount <span>8%</span> на пробне заняття з{' '}
                                <span>контраварійної підготовки</span>
                            </p>
                            <div className="push-top"></div>
                            <p>
                                АКПП - <span>40480 / 47840 / 55200 грн</span>
                                <br />
                                МКПП - <span>31280 грн</span>
                                <br />
                            </p>
                            <div className={classes.btn} data="MAX">
                                Залишити заявку
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
