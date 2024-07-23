import styles from './Intro.module.css';
import barcelonaIntro from '../../assets/barcelona-intro.png';

export const Intro = () => {
    return (
        <section className={styles.container}>
            <div className={styles["img-container"]}>
                <img src={barcelonaIntro} alt="Барселона"/>
            </div>
            <div className={styles["info-container"]}>
                <h1>Барселона - обзор города</h1>
                <p>
                    Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...
                </p>
                <a href="#">Читать дальше</a>
            </div>
        </section>
    );
};
