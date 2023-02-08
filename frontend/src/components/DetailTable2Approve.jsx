import React from "react";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Breadcrumb, Card} from "react-bootstrap";
import {Link} from "react-router-dom";


function DetailTable2Approve() {
    return (
        <div>

            <div className={"mb-2 p-1"}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={"../lodging"}>이전 페이지</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>상세 숙소정보</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Card className={"shadow-sm rounded-3 border-primary p-1"}>

            <div className="px-4 py-5 text-center">
                <div className={"feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 rounded-circle p-3"}><FontAwesomeIcon icon={faCheck} size="1x"/></div>

                <h2 className="display-5 fw-bold text-primary">승인 완료</h2>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">숙소 심사승인이 완료되어 예약을 받으실수 있습니다.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            {/*<button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>*/}
                            {/*<button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>*/}
                        </div>
                    </div>
            </div>

                <div className={"row p-5"}>
                <div className={"col-2"}>이미지</div>
                <div className={"col-6"}>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">제주 신라호텔</li>
                    <li className="list-group-item">제주 신라호텔</li>
                    <li className="list-group-item">제주 신라호텔</li>
                    <li className="list-group-item">제주 신라호텔</li>
                    <li className="list-group-item">제주 신라호텔</li>
                    <li className="list-group-item">제주 신라호텔</li>
                </ul></div>
                <div className={"col-4"}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">제주 신라호텔</li>
                        <li className="list-group-item">제주 신라호텔</li>
                        <li className="list-group-item">제주 신라호텔</li>
                        <li className="list-group-item">제주 신라호텔</li>
                        <li className="list-group-item">제주 신라호텔</li>
                        <li className="list-group-item">제주 신라호텔</li>
                    </ul>
                </div>

                </div>

                {/*<div className="row justify-content-center mb-5">*/}
                {/*    <button className="col-6 w-25 btn btn btn-lg btn-secondary me-5">반려</button>*/}
                {/*    <button className="col-6 w-25 btn btn-lg btn-primary">승인</button>*/}
                {/*</div>*/}

            </Card>
        </div>
    )
}

export default DetailTable2Approve;