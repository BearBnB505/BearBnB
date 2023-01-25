import React from "react";

function MessageList() {
    return (
        <div className={"d-flex flex-column align-items-stretch flex-shrink-0 bg-white mt-5"}>
            <div className={"list-group w-auto"}>
                <ul className={"list-group-item min-vh-100"}>

                    <li className={"list-group-item-action d-flex rounded-3 p-3 py-4"}>
                        <div className={"icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"}>
                            <img className="ReviewUserImg" src="/hostImg/1.png" alt="hostImg"/>
                        </div>

                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0"><strong>고객지원 팀</strong>
                                </h6>
                                <p className="mb-0 opacity-75"><strong>제주 신라 호텔 예약확정</strong></p>
                            </div>
                            <small className="opacity-50 text-nowrap">어제</small>
                        </div>
                    </li>

                    <hr/>

                    <li className={"list-group-item-action d-flex rounded-3 p-3 py-4"}>
                        <div className={"icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"}>
                            <img className="ReviewUserImg" src="/hostImg/1.png" alt="hostImg"/>
                        </div>

                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0"><strong>고객지원 팀</strong>
                                </h6>
                                <p className="mb-0 opacity-75"><strong>제주 신라 호텔 예약확정</strong></p>
                            </div>
                            <small className="opacity-50 text-nowrap">어제</small>
                        </div>
                    </li>

                    <hr/>


                </ul>
            </div>
        </div>
    )
}

export default MessageList;