export interface IUser {
    name: string;
    role: string;
    rating?: number;
    avatar: string;
}

export interface IMessage {
    id: number;
    date: Date;
    from: IUser;
    text: string;
}

export interface IChat {
    messages: IMessage[];
}

export interface IChatWithUsers {
    chat: IChat;
    mainUser: IUser;
    withUser: IUser;
}