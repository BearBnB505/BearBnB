import React from "react";
import Anima from "../Mypage/animaData";
import {motion} from "framer-motion";
import MessageList from "./MessageList";
import MessagePageList from "./MessagePageList";

function Message() {
    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={"container mt-5"}>
            <div className={"row p-2 mb-5"}>

                    <h2 className={"fw-bold"}>메세지알림</h2>
                    <h5>
                        <strong>주연 김</strong>
                        , gradispo@gmail.com
                    </h5>

                <div className={"col-md-4"}>
                    <MessageList />
                </div>

                <div className={"col-md-8"}>
                    <MessagePageList />
                </div>

            </div>
        </motion.div>
    )
}

export default Message;