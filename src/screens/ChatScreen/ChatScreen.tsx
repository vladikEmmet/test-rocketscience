import { useState } from 'react';
import styles from './ChatScreen.module.css';
import { Chat } from '../../widgets/Chat/Chat';
import { IChatWithUsers, IMessage } from '../../../types/user.types';
import userAvatar from '../../assets/userAvatar.png';
import adminAvatar from '../../assets/review-author-avatar.png';

const user = {
    name: 'Наталия Полянская',
    role: 'Гид по Баварии, фотограф',
    rating: 4,
    avatar: userAvatar,
};

const admin = {
    name: 'Администратор',
    role: 'TravelAsk',
    avatar: adminAvatar,
};

const initialChat = {
    messages: [],
};

const initialUserChat: IChatWithUsers = {
    chat: initialChat,
    mainUser: user,
    withUser: admin,
};

const initialAdminChat: IChatWithUsers = {
    chat: initialChat,
    mainUser: admin,
    withUser: user,
};

export const ChatScreen = () => {
    const [userChat, setUserChat] = useState(initialUserChat);
    const [adminChat, setAdminChat] = useState(initialAdminChat);

    const handleSendMessage = (message: IMessage) => {
        setUserChat((prevChat) => ({
            ...prevChat,
            chat: {
                ...prevChat.chat,
                messages: [...prevChat.chat.messages, message],
            },
        }));

        setAdminChat((prevChat) => ({
            ...prevChat,
            chat: {
                ...prevChat.chat,
                messages: [...prevChat.chat.messages, message],
            },
        }));
    };

    return (
        <section className={styles.container}>
            <div className={styles.chat}>
                <h2>Чат с пользователем</h2>
                <Chat
                    chatWith={user}
                    mainUser={admin}
                    messages={adminChat.chat.messages}
                    onSendMessage={handleSendMessage}
                />
            </div>
            <div className={styles.chat}>
                <h2>Чат с администратором</h2>
                <Chat
                    chatWith={admin}
                    mainUser={user}
                    messages={userChat.chat.messages}
                    onSendMessage={handleSendMessage}
                />
            </div>
        </section>
    );
};