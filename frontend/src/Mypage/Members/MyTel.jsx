import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";
import {motion} from "framer-motion";
import Anima from "../animaData";

function MyTel() {
    const [tel, setTel] = useState("");

    const onChangeTel = (e) => {
        setTel(e.target.value);
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
                        label="전화번호"
                        className="mb-3"
                    >
                        <Form.Control value={tel} onChange={onChangeTel}
                                      placeholder={"전화번호"}></Form.Control>
                    </FloatingLabel></InputGroup>
            </motion.div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"}>저장</button>
            </div>
        </div>
    )
}

export default MyTel;