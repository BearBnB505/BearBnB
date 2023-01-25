import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faUserShield, faUserLock} from "@fortawesome/free-solid-svg-icons";

function Aside() {
    return (
        <>
            <div className={"col-sm-12 col-lg-5"}>
                <div className={"card rounded p-1"}>
                    <div className={"card-body text-start"}>
                        <div className={"p-2"}>
                            <p>
                                <FontAwesomeIcon className={"blueColor"} icon={faUserShield} size="3x"/><br/><br/>
                                <h5 className={"fw-bold"}>여기에 내 개인정보가 표시되지 않는 이유가 무엇인가요?</h5>
                                신분이 노출되지 않도록 일부 계정 정보가 숨김 처리되었습니다.
                            </p>
                            <br/>
                            <hr/>

                            <p>
                                <FontAwesomeIcon className={"blueColor"} icon={faUserLock} size="3x"/><br/><br/>
                                <h5 className={"fw-bold"}>수정할 수 있는 세부 정보는 무엇인가요?</h5>
                                에어비앤비에서 본인 인증 시 사용하는 세부 정보는 변경할 수 없습니다. 연락처 정보와 일부 개인정보는 수정할 수 있지만, 다음번 예약 또는 숙소를
                                등록할 때 본인 인증 절차를 거쳐야 할 수도 있습니다.
                            </p>
                            <br/>
                            <hr/>

                            <p>

                                <FontAwesomeIcon className={"blueColor"} icon={faEye} size="3x"/><br/><br/>
                                <h5 className={"fw-bold"}>다른 사람에게 어떤 정보가 공개되나요?</h5>
                                에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를 공개합니다.
                            </p>
                            <br/>
                            <hr/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aside;