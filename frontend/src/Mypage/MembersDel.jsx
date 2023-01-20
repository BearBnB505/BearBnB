import React, {useState} from "react";
import {Breadcrumb, FloatingLabel, InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Anima from "./animaData";
import { motion } from "framer-motion";

function MembersDel() {

    const [pwd, setPwd] = useState("");

    const onChangePwd = (e) => {
        setPwd(e.target.value);
    }

    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/mypage">마이페이지</Breadcrumb.Item>
                    <Breadcrumb.Item active>회원 탈퇴</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className={"fw-bold"}>회원 탈퇴</h3>
            </div>

            <div className={"col-sm-10 col-md-10 col-lg-6 mx-auto"}>
                <div className={"mt-4 mb-3 text-center"}>
                    <h4><strong>안내 사항</strong></h4>
                </div>
                <Form.Control as="textarea" type="text" placeholder="계정을 영구 해지 및 삭제하면 다음 조치가 취해집니다.
에어비앤비는 보안상의 목적으로 본인 여부를 확인한 후에만 삭제 요청을 처리합니다.
요청이 처리되면 에어비앤비가 보유하고 있는 사용자의 모든 개인정보가 영구적으로 삭제됩니다. 단, 개인정보 처리방침에 명시된 것과 같이 법적으로 보관이 필수이거나 허용된 일부 정보는 제외됩니다.
계정이 삭제된 후에는 재활성화하거나, 데이터를 복구하거나, 계정에 접속할 수 없습니다. 에어비앤비를 다시 이용하려면 새 계정을 만드셔야 합니다. 데이터 주체권 행사와 관련해 자세한 내용을 확인해보세요."
                              readOnly  style={{ height: '300px' }} />
                <div className={"mt-4 mb-1 text-center"}>
                    <strong>회원님의 개인정보를 위해 비밀번호를 한번더 입력해주세요.</strong>
                </div>

                <div className={"mb-3"}>
                    <div>
                        <InputGroup size="lg">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="비밀번호"
                                className="mb-3"
                            >
                                <Form.Control value={pwd} onChange={onChangePwd}
                                              placeholder={"*******"}></Form.Control>
                            </FloatingLabel></InputGroup>
                    </div>
                    <div className={"mt-2"}>
                        <button className={"btn btn-dark btn-lg"}>저장</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MembersDel;
