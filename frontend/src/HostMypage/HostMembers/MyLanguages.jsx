import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const MyLanguages = (props) => {
    // const [languages, setLanguages] = useState("");

    const onChangeLanguages = (e) => {
        props.setLanguage(e.target.value);
    }

  const clickSave = () => {

    axios.put('http://localhost:8080/UpdateLanguage',null,{params: {language: props.language, userId: props.userId}})
      .then((response) => {
        console.log(response);
          Swal.fire("언어 정보를 수정하였습니다","　","success")

      })
      .catch(function (error) {
        console.log(error);
      });
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
                    ><Form.Control  onChange={onChangeLanguages} placeholder={"사용가능 언어"} value={props.language}></Form.Control>
                    </FloatingLabel></InputGroup>

            </div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"} onClick={clickSave}>저장</button>
            </div>
        </div>
    )
}

export default MyLanguages;