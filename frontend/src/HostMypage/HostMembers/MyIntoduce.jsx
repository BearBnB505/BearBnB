import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";
import axios from "axios";

const MyIntroduce = (props) => {
    const [languages, setLanguages] = useState("");

    const onChangeLanguages = (e) => {
        props.setIntroHost(e.target.value);
    }

  const clickSave = () => {

    axios.put('http://localhost:8080/UpdateIntroHost',null,{params: {introHost: props.introHost}})

      .then((response) => {
        console.log(response);
        console.log(props.introHost);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    return (
        <div className={"mb-3"}>
            <div>
                <div className={"mb-3"}><small>소개를 해주세요</small></div>

                <InputGroup size="lg">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="본인소개"
                        className="mb-3"
                    ><Form.Control value={props.introHost} onChange={onChangeLanguages} placeholder={"본인소개"}></Form.Control>
                    </FloatingLabel>
                </InputGroup>

            </div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"} onClick={clickSave}>저장</button>
            </div>
        </div>
    )
}

export default MyIntroduce;