import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";
import Anima from "../animaData";
import {motion} from "framer-motion";

function MyPwd() {
    const [pwd, setPwd] = useState("");

    const onChangePwd = (e) => {
        setPwd(e.target.value);
    }

    return (
        <div className={"mb-3"}>
            <motion.div
                variants={Anima}
                initial={"hidden"}
                animate={"visible"}>
                <InputGroup size="lg">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="비밀번호"
                        className="mb-3"
                    >
                        <Form.Control value={pwd} onChange={onChangePwd}
                                      placeholder={"*******"}></Form.Control>
                    </FloatingLabel></InputGroup>
            </motion.div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"}>저장</button>
            </div>
        </div>
)
}

export default MyPwd;