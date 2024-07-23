import {ISlide} from "../../../types/slide.types.ts";
import {FC} from "react";
import styles from "./CarouselItem.module.css";
import likeIcon from "../../assets/like-icon.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

interface CarouselItemProps extends ISlide {
    setCurrentImg: (img: string) => void
}

export const CarouselItem: FC<CarouselItemProps> =
    ({author, text, avatar, date, comments, likes, setCurrentImg}) => {

    return (
        <div className={styles.container}>
            <div className={styles['author-info']}>
                <img src={avatar} alt={author} />
                <p>{author}</p>
            </div>
            <div className={styles['city-info']}>
                <p>
                    <span>БАРСЕЛОНА</span> — О городе:
                </p>
            </div>
            <div className={styles.text}>{text}</div>
            <div className={styles['images-container']}>
                <img src={img1} alt="Барселона" onClick={() => setCurrentImg(img1)}/>
                <img src={img2} alt="Барселона" onClick={() => setCurrentImg(img2)}/>
                <img src={img3} alt="Барселона" onClick={() => setCurrentImg(img3)}/>
                <div className={styles.more} onClick={() => setCurrentImg(img1)}>
                    <img src={img3} alt="Барселона" className={styles.more}/>
                    <div className={styles.overlay}>
                        <p>+7</p>
                    </div>
                </div>
            </div>
            <div className={styles['publication-info']}>
                <p>{date}</p>
                <p className={styles.comments}>{comments} комментариев</p>
                <button>
                    <img src={likeIcon} alt="Лайки:" />
                    <p>{likes}</p>
                </button>
            </div>
        </div>
    );
};