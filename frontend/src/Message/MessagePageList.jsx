import React from "react";
import {Button} from "react-bootstrap";

function MessagePageList() {
    return (
        <div className={"mt-5 border border-1 rounded min-vh-100 p-3"}>
            <li className={"list-group-item-action d-flex rounded-3 p-3 py-4"}>
                <div className={"icon-square d-inline-flex align-items-start justify-content-center fs-4 flex-shrink-0 me-3"}>
                    <img className="ReviewUserImg" src="/hostImg/1.png" alt="hostImg"/>
                </div>

                <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h5 className="mb-1"><strong><span className={""}>예약이 확정</span>되었습니다.</strong>
                        </h5>
                        <p className="mb-4 opacity-75">제주도 신라호텔</p>
                        <div>
                            <ul>
                                <li>예약번호 : 1152151</li>
                                <li>예약상품 : 제주도 신라호텔</li>
                                <li>예약자명 : 김주연</li>
                                <li>전화번호 : 010-8020-5246</li>
                                <li>예약시간 : 2023.02.21(화) ~ 2023.02.24(금)</li>
                                <li>예약내용 : 디럭스 룸</li>
                            </ul>
                            <Button className={"primary w-auto"}>예약 내역 보러가기</Button>
                        </div>
                    </div>
                    <small className="opacity-50 text-nowrap">어제</small>
                </div>

            </li>




        </div>
    )
}

export default MessagePageList;