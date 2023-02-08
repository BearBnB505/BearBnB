import React from "react";

function Footer() {
    return (
        <div className="container-fluid border-top mt-5 p-1" style={{backgroundColor: "rgb(247, 247, 247)"}}>
            <div className={"container my-1"}>
                <footer className="d-flex mb-4">
                    <div className="row">

                        <div className={"justify-content-between mb-3"}>

                            <div>
                                <ul style={styles.footerUl}>
                                    <li className={"float-start me-3"}>© 2023 Airbnb, Inc</li>
                                    <li className={"float-start me-2"}>·개인정보 처리방침</li>
                                    <li className={"float-start me-2"}>·이용약관</li>
                                    <li className={"float-start me-2"}>·사이트맵</li>
                                    <li className={"float-start me-2"}>·한국의 변경된 환불 정책</li>
                                    <li className={"float-start me-2"}>·회사 세부정보</li>
                                </ul>
                            </div>
                            <div>
                                <ul style={styles.footerUl}>
                                    <li className={"float-end"}>지원 및 참고 자료</li>
                                    <li className={"float-end me-5"}>₩ KRW</li>
                                    <li className={"float-end me-5"}>한국어 (KR)</li>
                                </ul>
                            </div>
                        </div>

                        <div className={"border-top"}>
                            <div className={"mt-2"} style={{fontSize: 11}}>웹사이트 제공자: Airbnb Ireland UC, private
                                unlimited company, 8 Hanover Quay Dublin 2, D02 DP23
                                Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L |
                                사업자 등록
                                번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 |
                                에어비앤비는
                                통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험,
                                호스트
                                서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
                            </div>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    )
}

const styles = {
    footerUl: {
        padding: 0,
        listStyleType: "none",
        fontSize: "12px",
    },
}

export default Footer;