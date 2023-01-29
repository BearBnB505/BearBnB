import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";

const MyLanguages = () => {
    const [languages, setLanguages] = useState("");

    const onChangeLanguages = (e) => {
        setLanguages(e.target.value);
    }

    return (
        <div className={"mb-3"}>
            <div>
                <div className={"mb-3"}><small>사용가능한 언어를 적어주세요</small></div>

                <InputGroup size="lg">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="사용가능 언어"
                        className="mb-3"
                    ><Form.Control  onChange={onChangeLanguages} placeholder={"사용가능 언어"}></Form.Control>
                    </FloatingLabel></InputGroup>

            </div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"}>저장</button>
            </div>
        </div>
    )
}

export default MyLanguages;