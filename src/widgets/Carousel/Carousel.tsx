import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./Carousel.module.css";
import "swiper/css/bundle";
import {CarouselItem} from "../../components/CarouselItem/CarouselItem.tsx";
import cn from 'clsx';
import {useState} from "react";
import {slides} from "../../store/store.ts";
import {CustomModal} from "../../components/CustomModal/CustomModal.tsx";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

export const Carousel = () => {
    const [swiper, setSwiper] = useState();
    const [activeSlide, setActiveSlide] = useState<number | null>(0);
    const [currentImg, setCurrentImg] = useState<string | null>('');

    const handleSetImg = (img: string) => {
        setCurrentImg(img);
    }

    const onClose = () => {
        setCurrentImg(null);
    }

    // @ts-ignore
    const handleSwiper = (swiperInstance: any) => {
        setSwiper(swiperInstance);
    }

    const handleSlideChange = (idx: number) => {
        // @ts-ignore
        swiper && swiper.slideTo(idx);
        setActiveSlide(idx);
    }

    const images = [
        {
            id: 0,
            src: img1,
        },
        {
            id: 1,
            src: img2,
        },
        {
            id: 2,
            src: img3,
        },
    ];

    const setNext = () => {
        const curIdx = images.findIndex((img) => img.src === currentImg);
        if(curIdx === images.length - 1) {
            setCurrentImg(images[0].src);
            return;
        }
        setCurrentImg(images[curIdx + 1].src);
    }

    const setPrev = () => {
        const curIdx = images.findIndex((img) => img.src === currentImg);
        if(curIdx === 0) {
            setCurrentImg(images[images.length - 1].src);
            return;
        }
        setCurrentImg(images[curIdx - 1].src);
    }

    return (
        <div>
            <Swiper
                modules={[A11y, Autoplay]}
                autoplay={{delay: 2000}}
                spaceBetween={115}
                slidesPerView={3}
                className={styles.carousel}
                // loop={true}
                onSwiper={handleSwiper}
                onSlideChange={(swiperClass: any) => setActiveSlide(swiperClass.activeIndex)}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <CarouselItem
                            author={slide.author}
                            avatar={slide.avatar}
                            comments={slide.comments}
                            date={slide.date}
                            likes={slide.likes}
                            text={slide.text}
                            id={slide.id}
                            setCurrentImg={handleSetImg}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles['pagination-container']}>
                <button className={styles.reviews}>Все отзывы</button>
                <div className={styles.pagination}>
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            className={cn(styles['pagination-item'], {
                                [styles.active]: activeSlide === index,
                            })}
                            onClick={() => handleSlideChange(index)}
                        ></button>
                    ))}
                </div>
            </div>
            <CustomModal
                isOpen={!!currentImg}
                onClose={onClose}
                contentLabel={"Image Gallery"}
                currentImg={currentImg || ''}
                setNext={setNext}
                setPrev={setPrev}
            />
        </div>
    );
};

