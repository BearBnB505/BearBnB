import React from "react";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Breadcrumb, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import DetailTable2Image from "./DetailTable2Image";
import DetailTable2Contents from "./DetailTable2Contents";


function DetailTable2Approve({lodging, comfort}) {
    return (
        <div>

            <div className={"mb-2 p-1"}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={"../lodging"}>이전 페이지</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>상세 숙소정보</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Card className={"shadow-sm rounded-3 border-primary p-1"}>

            <div className="py-5 text-center">
                <div className={"feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 rounded-circle p-3"}><FontAwesomeIcon icon={faCheck} size="1x"/></div>

                <h2 className="display-5 fw-bold text-primary">{lodging.regState}</h2>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">심사승인이 완료된 호스트 입니다.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        </div>
                    </div>
            </div>

                <div className={"row px-5 mb-5"}>
                    <div className={"col-2"}>
                        <DetailTable2Image lodging={lodging}/>
                    </div>

                    <DetailTable2Contents lodging={lodging} comfort={comfort}/>
                </div>


            </Card>
        </div>
    )
}

export default DetailTable2Approve;