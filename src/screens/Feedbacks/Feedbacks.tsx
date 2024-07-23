import styles from './Feedbacks.module.css';
import {Carousel} from "../../widgets/Carousel/Carousel.tsx";

export const Feedbacks = () => {
    return (
        <section className={styles.container}>
            <h2>Отзывы о Барселоне</h2>
            <Carousel />
        </section>
    );
};