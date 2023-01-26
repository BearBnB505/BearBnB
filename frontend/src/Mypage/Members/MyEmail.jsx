import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";
import Anima from "../animaData";
import {motion} from "framer-motion";

function MyEmail() {
    const [email, setEmail] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (

        <div className={"mb-3"}>
            <motion.div variants={Anima}
                        initial={"hidden"}
                        animate={"visible"}>
                <div className={"mb-3"}>
                    <small>언제든지 확인하실 수 있는 주소를 사용하세요</small>
                </div>
                <InputGroup size="lg">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="이메일"
                        className="mb-3">
                        <Form.Control value={email} onChange={onChangeEmail} placeholder={"이메일"}></Form.Control>
                    </FloatingLabel></InputGroup>
            </motion.div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"}>저장</button>
            </div>
        </div>
    )
}

export default MyEmail;