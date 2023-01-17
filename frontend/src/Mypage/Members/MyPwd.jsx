import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {InputGroup} from "react-bootstrap";

function MyPwd() {
    const [pwd, setPwd] = useState("");

    const onChangePwd = (e) => {
        setPwd(e.target.value);
    }

    return (
        <div className={"mb-3"}>
            <div>
                <InputGroup size="lg"><Form.Control value={pwd} onChange={onChangePwd}
                                                    placeholder={"*******"}></Form.Control></InputGroup>
            </div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"}>저장</button>
            </div>
        </div>
    )
}

export default MyPwd;