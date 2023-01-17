import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {InputGroup} from "react-bootstrap";

const MyName = () => {
    const [name, setName] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    return (
        <div className={"mb-3"}>
            <div>
                <div className={"mb-3"}><small>허가증이나 여권 등 여행 서류에 기재되어 있는 이름을 말합니다.</small></div>
                <InputGroup size="lg"><Form.Control value={name} onChange={onChangeName}
                                                    placeholder={"이름"}></Form.Control></InputGroup>
            </div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"}>저장</button>
            </div>
        </div>
    )
}

export default MyName;