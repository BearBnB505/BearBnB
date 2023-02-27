import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";
import Anima from "../animaData";
import {motion} from "framer-motion";
import axios from "axios";
import swal from 'sweetalert';


function MyEmail(props) {
    // const [email, setEmail] = useState("");

    const onChangeEmail = (e) => {
        props.setEmail(e.target.value);
    }

    const saveBtn = (e) => {
        axios.put('http://localhost:8080/UpdateMemberName/',null,{params: {idx: props.idx , userId: props.email}})
          .then((response) => {
            console.log(response);
            swal("이메일 변경 완료","　","success")

          })
          .catch(function (error) {
            console.log(error);
          });
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
                        <Form.Control value={props.email} onChange={onChangeEmail} placeholder={"이메일"}></Form.Control>
                    </FloatingLabel></InputGroup>
            </motion.div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"} onClick={saveBtn}>저장</button>
            </div>
        </div>
    )
}

export default MyEmail;