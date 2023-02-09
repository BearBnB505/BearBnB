import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";
import {motion} from "framer-motion";
import Anima from "../animaData";
import axios from "axios";
import swal from 'sweetalert';


function MyTel(props) {

    const onChangeTel = (e) => {
        props.setTel(e.target.value);
    }

  const saveBtn = (e) => {
    axios.put('http://localhost:8080/UpdateMemberTel/',null,{params: {idx: props.idx , tel: props.tel}})

      .then((response) => {
        console.log(response);
        swal("전화번호 변경 완료","　","success")
      })
      .catch(function (error) {
        console.log(error);
      });
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
                        <Form.Control value={props.tel} onChange={onChangeTel}
                                      placeholder={"전화번호"}></Form.Control>
                    </FloatingLabel></InputGroup>
            </motion.div>
            <div className={"mt-2"}>
                <button className={"btn btn-dark btn-lg"} onClick={saveBtn}>저장</button>
            </div>
        </div>
    )
}

export default MyTel;