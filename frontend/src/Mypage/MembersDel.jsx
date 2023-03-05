import React, {useEffect, useState} from "react";
import {Breadcrumb, FloatingLabel, InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Anima from "./animaData";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {useLocation} from "react-router";
import {Auth} from "../Auth/Auth";


function MembersDel() {

    const [pwd, setPwd] = useState("");

    // const location = useLocation();
    //여기에요 여기!! 유저 아이디 넣어야 할 부분 !!!
    // const userId = location.state.userId;
    const {userId} = Auth();

    const onChangePwd = (e) => {
        setPwd(e.target.value);
    }

    // const [userId, setUserId] = useState('');


    const [truePwd, setTruePwd] = useState('');

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/getMemberData', {params:{userId:userId}})
          .then((req) => {
              const {data} = req;
              setData(data);
              // setEmail(data[0].userId)
              // setUserId('민지')
              setTruePwd(data[0].pwd)
              // setTruePwd('123')
          })
          .catch((err) => {
              console.log("통신 오류");
              console.log(err);
          })
    }, []);

    // const delBtn = ()=>{
    //     if(truePwd == pwd){
    //     axios.put("http://localhost:8080/memberDelete",null,{params:{userId : userId}})
    //       .then(r => {
    //           console.log("삭제 데이터 보내기 성공");
    //       }).catch((err) => {
    //           console.log("삭제데이터 보내기 실패");
    //           console.log(err);
    //     })
    //         window.location.replace("http://localhost:3000/");
    //     }
    //     else {
    //         console.log("삭제 실패");
    //     }
    // }


    const delBtn = ()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        if(truePwd == pwd) {
            swalWithBootstrapButtons.fire({
                title: '회원탈회 하시겠습니까?',
                text: "탈퇴 후 취소가 불가능합니다!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '탈퇴',
                cancelButtonText: '취소',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                      '탈퇴하였습니다!',
                      '　',
                      'success',
                      axios.put("http://localhost:8080/memberDelete",null,{params:{userId : userId}})
                        .then(r => {
                            console.log("삭제 데이터 보내기 성공");
                        }).catch((err) => {
                          console.log("삭제데이터 보내기 실패");
                          console.log(err);
                      }),
                    window.location.replace("http://localhost:3000/")
                    )
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                      '취소하였습니다',
                      '　',
                      'error'
                    )
                }
            })
        }else {
            Swal.fire({
                icon: 'error',
                title: '비밀번호가 일치하지 않습니다',
                text: '비밀번호를 다시 입력해 주세요!',
            })
            console.log("삭제 실패");
        }

    }





    return (
        <motion.div variants={Anima}
                    initial="hidden"
                    animate="visible"
                    exit="exit" className={"container mt-5"}>
            <div className={"mb-5"}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={"../mypage"}>마이페이지</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>회원 탈퇴</Breadcrumb.Item>
                </Breadcrumb>
                <h3 className={"fw-bold"}>회원 탈퇴</h3>
            </div>

            <div className={"col-sm-10 col-md-10 col-lg-6 mx-auto"}>
                <div className={"mt-4 mb-3 text-center"}>
                    <h4><strong>계정 비활성화 안내</strong></h4>
                </div>
                <Form.Control as="textarea" type="text" placeholder="계정을 영구 해지 및 삭제하면 다음 조치가 취해집니다.
에어비앤비는 보안상의 목적으로 본인 여부를 확인한 후에만 삭제 요청을 처리합니다.
요청이 처리되면 에어비앤비가 보유하고 있는 사용자의 모든 개인정보가 영구적으로 삭제됩니다. 단, 개인정보 처리방침에 명시된 것과 같이 법적으로 보관이 필수이거나 허용된 일부 정보는 제외됩니다.
계정이 삭제된 후에는 재활성화하거나, 데이터를 복구하거나, 계정에 접속할 수 없습니다. 에어비앤비를 다시 이용하려면 새 계정을 만드셔야 합니다. 데이터 주체권 행사와 관련해 자세한 내용을 확인해보세요."
                              readOnly  style={{ height: '300px' }} />
                <div className={"mt-4 mb-2 text-center"}>
                    <strong><p>회원님의 개인정보를 위해 비밀번호를 한번더 입력해주세요.</p></strong>
                </div>

                <div className={"mb-3"}>
                    <div>
                        <InputGroup size="lg">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="비밀번호"
                                className="mb-3"
                            >
                                <Form.Control type="password" value={pwd} onChange={onChangePwd}
                                              placeholder={"*******"}></Form.Control>
                            </FloatingLabel></InputGroup>
                    </div>
                    <div className={"mt-2"}>
                        <button className={"btn btn-dark btn-lg"} onClick={delBtn}>회원탈퇴</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MembersDel;
