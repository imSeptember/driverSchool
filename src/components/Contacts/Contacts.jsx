import classes from './Contacts.module.css';
import { useState } from 'react';

import facebook from '/src/assets/facebook.svg';
import telegram from '/src/assets/telegram.svg';
import instagram from '/src/assets/instagram.svg';
import viber from '/src/assets/viber.svg';

export default function Contacts() {
    const [placeholder, setPlaceholder] = useState('Номер телефону');

    const handleMouseEnter = () => {
        setPlaceholder('+38 (___) ___-____');
    };

    const handleMouseLeave = () => {
        setPlaceholder('Номер телефону');
    };

    return (
        <section id={classes.contacts}>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <div className={classes.col}>
                        <h1>Контакти</h1>
                        <div className={classes.pushTop}></div>

                        <form
                            action="send.php"
                            method="post"
                            className="form-ajax"
                        >
                            <input name="type" type="hidden" value="contact" />
                            <input name="name" type="text" placeholder="Ім'я" />
                            <input
                                name="phone"
                                type="text"
                                placeholder={placeholder}
                                data-phone-mask=""
                                data-im-insert="true"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                            <div className={classes.errorMsg}></div>
                            <button>Відправити</button>
                        </form>
                    </div>
                    <div className={classes.col}>
                        <p>
                            Де ми знаходимось?
                            <a
                                href="https://goo.gl/maps/sx2Q3WFEfZgmqZv9A"
                                target="_blank"
                            >
                                Вул.Вікентія Хвойки,, 15/15/6, <br />
                                Київ, 04080
                            </a>
                        </p>
                        <p>
                            Час роботи:
                            <a>24/7</a>
                        </p>
                        <p>
                            <a href="tel:+380671050003">+38 (067) 501-21-95</a>
                            <a href="mailto:mrdrive.com.ua@gmail.com">
                                kalenskiyAlex@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className={classes.socials}>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="https://t.me/" target="_blank">
                        <img src={telegram} alt="telegram" />
                    </a>
                    <a href="https://instagram.com/" target="_blank">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="viber://chat?number=%2B380675012195">
                        <img src={viber} alt="viber" />
                    </a>
                </div>
            </div>
        </section>
    );
}
