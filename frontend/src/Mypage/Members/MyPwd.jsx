import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";
import "../Style.css";
import Anima from "../animaData";
import {motion} from "framer-motion";
import swal from 'sweetalert';
import axios from "axios";

function MyPwd(props) {
  // const [pwd, setPwd] = useState("");
  //
  // const onChangePwd = (e) => {
  //     setPwd(e.target.value);
  // }
  const [pwd1, setPwd1] = useState("")
  const [pwd2, setPwd2] = useState("")
  const [pwdState, setPwdState] = useState("변경할 비밀번호를 입력하세요")


  const onChangePwd1 = (e) => {
    setPwd1(e.target.value);
  }
  const onChangePwd2 = (e) => {
    setPwd2(e.target.value);
  }

  const saveBtn = () => {
    if (pwd1.length > 9 && pwd1 == pwd2) {
      return (
        setPwdState("변경할 비밀번호를 입력하세요"),
      axios.put('http://localhost:8080/UpdateMemberPwd', null, {params: {idx: props.idx, pwd: pwd1}})
        .then((response) => {
          console.log(response);
          swal("비밀번호 변경 완료", "　", "success");
        })
        .catch(function (error) {
            console.log(error);
          }
        )
      )
    } else if (pwd1.length < 10) {
      return setPwdState("비밀번호가 짧습니다");
    } else if (pwd1.length > 9 && pwd1 !== pwd2) {
      return setPwdState("비밀번호가 일치하지 않습니다.");
    }

  }


  return (
    <div className={"mb-3"}>
      <motion.div
        variants={Anima}
        initial={"hidden"}
        animate={"visible"}>
        {/*<InputGroup size="lg">*/}
        {/*<FloatingLabel*/}
        {/*    controlId="floatingInput"*/}
        {/*    label="비밀번호"*/}
        {/*    className="mb-3"*/}
        {/*>*/}
        {/*<Form.Control value={pwd} onChange={onChangePwd}*/}
        {/*              placeholder={"*******"}></Form.Control>*/}
        {/*</FloatingLabel>*/}

        {/*</InputGroup>*/}
        <Form>
          <Form.Group className="mb-3" controlId="password1">
            <div className={"pswFrame"}>
              <Form.Label>비밀번호 </Form.Label>
              <div style={{color: "gray"}}>{pwdState}</div>
            </div>
            <Form.Control type="password" placeholder="1차 비밀번호" onChange={onChangePwd1}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password2">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control type="password" placeholder="2차 비밀번호" onChange={onChangePwd2}/>
          </Form.Group>
        </Form>
      </motion.div>
      <div className={"mt-2"}>
        <button className={"btn btn-dark btn-lg"} onClick={saveBtn}>저장</button>
      </div>
    </div>
  )
}

export default MyPwd;