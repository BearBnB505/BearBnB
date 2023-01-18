import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";

function MyTel() {
    const [tel, setTel] = useState("");

    const onChangeTel = (e) => {
        setTel(e.target.value);
    }

    return (
        <div className={"mb-3"}>
            <div>
                <InputGroup size="lg">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="전화번호"
                        className="mb-3"
                    >
                        <Form.Control value={tel} onChange={onChangeTel}
                                      placeholder={"전화번호"}></Form.Control>
                    </FloatingLabel></InputGroup>
            </div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"}>저장</button>
            </div>
        </div>
)
}

export default MyTel;