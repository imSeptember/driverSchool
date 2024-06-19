import classes from './Header.module.css';

export default function Header() {
    return (
        <header>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <a href="">
                        <img src="src/assets/phone.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="src/assets/logo.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="src/assets/burger.svg" alt="" />
                    </a>
                </div>
            </div>
        </header>
    );
}
