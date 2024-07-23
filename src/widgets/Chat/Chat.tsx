import React, { useState } from 'react';
import styles from './Chat.module.css';
import { IMessage, IUser } from '../../../types/user.types';
import flag from '../../assets/flag.png';
import starFilled from '../../assets/star-filled.png';
import starEmpty from '../../assets/star-empty.png';
import sendIcon from '../../assets/send.png';
import {formatMessageDate} from "../../utils/formatMessageDate.ts";

interface ChatProps {
    chatWith: IUser;
    mainUser: IUser;
    messages: IMessage[];
    onSendMessage: (message: IMessage) => void;
}

export const Chat: React.FC<ChatProps> = ({ chatWith, mainUser, messages, onSendMessage }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const message: IMessage = {
            id: messages.length + 1,
            from: mainUser,
            text: newMessage,
            date: new Date(),
        };

        onSendMessage(message);
        setNewMessage('');
    };

    return (
        <div className={styles['chat-container']}>
            <div className={styles['contact-info']}>
                <div className={styles['contact-avatar-container']}>
                    <img src={chatWith.avatar} alt={`${chatWith.name}'s avatar`} />
                </div>
                <div className={styles['contact-description']}>
                    <p>{chatWith.name}</p>
                    <div>
                        <img src={flag} alt={`Role: ${chatWith.role}`}/>
                        <p>{chatWith.role}</p>
                    </div>
                </div>
                {
                    chatWith.rating &&
                    <div className={styles.rating}>
                        {Array.from({ length: chatWith.rating }).map((_, index) => (
                            <img key={index} src={starFilled} alt=""/>
                        ))}
                        {Array.from({ length: 5 - chatWith.rating }).map((_, index) => (
                            <img key={index} src={starEmpty} alt=""/>
                        ))}
                    </div>
                }
            </div>
            <div className={styles.messages}>
                {messages.map((message, index) => (
                    <div key={index} className={message.from === mainUser ? styles.myMessage : styles.otherMessage}>
                        <img src={message.from.avatar} alt={`${message.from.name}'s avatar`} />
                        <div>
                            <p>{message.text}</p>
                            <span>{formatMessageDate(message.date)}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.inputContainer}>
                <img src={mainUser.avatar} alt="Avatar"/>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Напишите сообщение..."
                />
                <button onClick={handleSendMessage}>
                    <img src={sendIcon} alt="Отправить"/>
                </button>
            </div>
        </div>
    );
};