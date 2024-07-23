import {FC} from "react";
import styles from "./CustomModal.module.css";
import Modal from "react-modal";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    setPrev: () => void;
    setNext: () => void;
    contentLabel: string;
    currentImg: string;
}

export const CustomModal: FC<ModalProps> = ({isOpen, onClose, contentLabel, currentImg, setPrev, setNext}) => {


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel={contentLabel}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <div className={styles['modal-controller']}>
                <button className={styles.prev} onClick={setPrev}>&lt;</button>
                    <img src={currentImg} alt="Барселона"/>
                <button className={styles.next} onClick={setNext}>&gt;</button>
            </div>
        </Modal>
    );
};

Modal.setAppElement('#root');
