import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {InputGroup} from "react-bootstrap";

function MyEmail() {
    const [email, setEmail] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (

        <div className={"mb-3"}>
            <div>
                <div className={"mb-3"}><small>언제든지 확인하실 수 있는 주소를 사용하세요</small></div>
                <InputGroup size="lg"><Form.Control value={email} onChange={onChangeEmail}
                                                    placeholder={"g***o@gmail.com"}></Form.Control></InputGroup>
            </div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"}>저장</button>
            </div>
        </div>
    )
}

export default MyEmail;