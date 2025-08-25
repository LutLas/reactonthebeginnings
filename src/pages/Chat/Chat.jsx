import React from 'react';
import './Chat.css'
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar.jsx";
import RightSideBar from "../../components/RightSideBar/RightSideBar.jsx";
import ChatBox from "../../components/ChatBox/ChatBox.jsx";

const Chat = props => {
    return (
        <div className={'chat'}>
            <div className={'chat-container'}>
                <LeftSideBar/>
                <ChatBox/>
                <RightSideBar/>
            </div>
        </div>
    );
};

export default Chat;