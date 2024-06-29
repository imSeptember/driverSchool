import { useState } from 'react';
import { usePopup } from '../Context/PopupContext';
import { useEmail } from '../Context/EmailContext';
import classes from './Modal__phone.module.css';

import facebook from '/src/assets/facebook.svg';
import telegram from '/src/assets/telegram.svg';
import instagram from '/src/assets/instagram.svg';
import viber from '/src/assets/viber.svg';

export default function ModalPhone() {
    // Email.send({
    //     SecureToken: 'eba1892b-db0a-44c7-973d-e2697483718f',
    //     To: '777drivingschool777@gmail.com',
    //     From: '777drivingschool777@gmail.com',
    //     Subject: 'This is the subject',
    //     Body: 'And this is the body',
    // }).then((message) => alert(message));

    const { isPopupVisible, closePopup } = usePopup();
    const [placeholder, setPlaceholder] = useState('Ваш номер телефону');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { setIsEmailSent } = useEmail(); // Get setIsEmailSent from context

    const handleMouseEnter = () => {
        setPlaceholder('+38 (___) ___-____');
    };

    const handleMouseLeave = () => {
        setPlaceholder('Ваш номер телефону');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Example using EmailJS for sending email
        Email.send({
            SecureToken: 'eba1892b-db0a-44c7-973d-e2697483718f',
            To: '777drivingschool777@gmail.com',
            From: '777drivingschool777@gmail.com',
            Subject: 'Новый Клиент',
            Body: `Телефонный номер: ${phoneNumber}`,
        })
            .then((response) => {
                console.log('Email sent!', response.status, response.text);
                setIsEmailSent(true);
                closePopup();
            })

            .catch((error) => {
                console.error('Email could not be sent:', error);
                // Handle error, e.g., show error message
            });
    };

    if (!isPopupVisible) return null; // Hide popup if not visible

    return (
        <div id="callback-popup" className={`${classes.popup} animated`}>
            <div className={classes.close} onClick={closePopup}>
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
                    <h1>
                        Замовити <span>зворотний дзвінок</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            required
                            name="phone"
                            type="text"
                            placeholder={placeholder}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <button type="submit">Відправити</button>
                        <div className={classes.errorMsg}></div>
                    </form>
                    <h2>або зв&lsquo;язатися іншим зручним для вас способом</h2>

                    <div className={classes.socials}>
                        <a
                            href="https://www.facebook.com/mrdriveschool/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a
                            href="https://t.me/MrDriveDrivingSchool"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a
                            href="https://instagram.com/mr.drive_school?igshid=17xepd9mbd8um"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="viber://chat?number=%2B380671050003">
                            <img src={viber} alt="viber" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
