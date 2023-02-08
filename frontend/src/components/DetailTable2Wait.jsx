import React from "react";
import {Breadcrumb, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

function DetailTable2Wait() {
    return(
        <div>

            <div className={"mb-2 p-1"}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={"../lodging"}>이전 페이지</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>상세 숙소정보</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Card className={"shadow-sm rounded-3 p-1"}>

                <div className="px-4 py-5 text-center">

                    {/*<button className="btn btn-primary" type="button" disabled>*/}
                    {/*    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{width:50, height:50}}></span>*/}
                    {/*    <span> 승인대기</span>*/}
                    {/*</button>*/}

                    <div className="spinner-border mt-1 mb-4 text-secondary" style={{width: 50, height: 50}} role="status">
                        <span className="visually-hidden">승인대기</span>
                    </div>

                    <h2 className="display-5 fw-bold text-secondary">승인대기</h2>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-0">숙소 등록 심사승인이 되지 않았습니다.</p>
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

                <div className="row justify-content-center mb-5">
                    <button className="col-6 w-25 btn btn btn-lg btn-secondary me-5">반려</button>
                    <button className="col-6 w-25 btn btn-lg btn-primary">승인</button>
                </div>


            </Card>
        </div>
    )
}

export default DetailTable2Wait;
