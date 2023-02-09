import React, {useState} from "react";
import {Breadcrumb, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import DetailTable2WaitModal from "./DetailTable2WaitModal";
import DetailTable2Image from "./DetailTable2Image";
import DetailTable2Contents from "./DetailTable2Contents";

function DetailTable2Wait({lodging, comfort}) {

    const [modal, setModal] = useState(false);

    return (
        <div>

            <div className={"mb-2 p-1"}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={"../lodging"}>이전 페이지</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>상세 숙소정보</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Card className={"shadow-sm rounded-3 p-1"}>

                <div className="py-5 text-center">

                    <div className="spinner-border mt-1 mb-4 text-secondary" style={{width: 50, height: 50}}
                         role="status">
                        <span className="visually-hidden"></span>
                    </div>

                    <h2 className="display-5 fw-bold text-secondary">{lodging.regState}</h2>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-0">숙소 등록 심사승인이 되지 않았습니다.</p>
                    </div>
                </div>

                <div className={"row px-5"}>
                    <div className={"col-2"}>
                        <DetailTable2Image lodging={lodging}/>
                    </div>

                        <DetailTable2Contents lodging={lodging} comfort={comfort}/>
                </div>

                <div className="row justify-content-center mb-5">
                    <button className="col-6 w-25 btn btn btn-lg btn-secondary me-5">반려</button>
                    <button className="col-6 w-25 btn btn-lg btn-primary" onClick={() => setModal(true)}>승인</button>
                </div>

                <DetailTable2WaitModal
                    show={modal}
                    onHide={() => setModal(false)}/>

            </Card>
        </div>
    )
}

export default DetailTable2Wait;


