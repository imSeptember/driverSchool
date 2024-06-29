import classes from './Courses.module.css';

export default function Courses() {
    return (
        <section id="extras" className={classes.packages}>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <h1>Курси підвищення кваліфікації</h1>
                    <div className={classes.packagesRow}>
                        <div className={classes.packagesItem}>
                            <h4>
                                Контраварійне <br /> водіння
                            </h4>
                            <h3>
                                <span>6</span> годин
                            </h3>
                            <p>
                                авто школи - <span>16200 грн</span>
                            </p>
                            <div className={classes.pushTop}></div>
                            <div className={classes.btn}>Залишити заявку</div>
                        </div>
                        <div className={classes.packagesItem}>
                            <h4>
                                Водіння <br /> у зимових умовах
                            </h4>
                            <h3>
                                <span>9</span> годин
                            </h3>
                            <p>
                                авто учня - <span>6500 грн</span>
                                <br />
                                авто школи - <span>8400 грн</span>
                            </p>
                            <div className={classes.pushTop}></div>
                            <div className={classes.btn}>Залишити заявку</div>
                        </div>

                        <div className={classes.packagesItem}>
                            <h4>
                                Спортивна <br /> програма
                            </h4>
                            <h3>
                                <span>16</span> годин
                            </h3>
                            <p>
                                авто школи - <span>3200 грн/година</span>
                                <br /> або
                                <span> 51200 грн/курс</span>
                            </p>
                            <div className={classes.pushTop}></div>
                            <div className={classes.btn}>Залишити заявку</div>
                        </div>

                        <div className={classes.packagesItem}>
                            <h4>
                                Особистий водій, <br /> охоронець
                            </h4>
                            <h3>
                                <span>10</span> годин
                            </h3>
                            <p>
                                авто учня - <span>20000 грн</span>
                                <br />
                                авто школи - <span>60000 грн</span>
                            </p>
                            <div className={classes.pushTop}></div>
                            <div className={classes.btn}>Залишити заявку</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
