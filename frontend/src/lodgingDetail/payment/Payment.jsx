import React from "react";
import {Button, Dropdown} from "react-bootstrap";

function Payment(props){
    return(
        <div id={'aside'}>
            <div className={'container border shadow rounded-4 px-5 py-4 mb-4'}>

                {/*<div className={''}>요금을 확인하려면 날짜를 입력하세요.</div>*/}
                {/*<div id="btn_group">*/}
                {/*    <button id="test_btn1">테스트1</button>*/}
                {/*    <button id="test_btn2">테스트2</button>*/}
                {/*</div>*/}
                {/*<Dropdown>*/}
                {/*    <Dropdown.Toggle id="test_btn3">테스트2</Dropdown.Toggle>*/}
                {/*    <Dropdown.Menu>*/}
                {/*        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>*/}
                {/*        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
                {/*        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                {/*    </Dropdown.Menu>*/}
                {/*</Dropdown>*/}
                {/*<Button className={'paymentBtn'} variant="primary">예약 가능 여부 보기</Button>*/}

                <div>
                    <div>
                        <span className={'fs-4 fw-bold me-1'}>\{props.cost}</span>
                        <span>/박</span>
                    </div>
                    <div className={'btn-group-vertical container mx-0 px-0 my-3'}>
                        <div className={'btn-group'}>
                            <button className={'btn btn-outline-dark text-start py-2'}>체크인</button>
                            <button className={'btn btn-outline-dark text-start'}>체크아웃</button>
                        </div>
                        <div className={'btn-group'}>
                            <button className={'btn btn-outline-dark text-start py-2'}>인원</button>
                        </div>
                    </div>

                    <Button className={'w-100 py-2 mb-2'} variant="primary">예약하기</Button>

                    <p className={'text-center'} style={{fontSize:13}}>예약 확정 전에는 요금이 청구되지 않습니다.</p>

                    <div className={'row'}>
                        <div className={'col-7'}>
                            <span>\1박요금 x 숙박일수</span>
                        </div>
                        <div className={'col text-end'}>
                            <span>total</span>
                        </div>
                    </div>
                    <hr className={'my-4'}/>

                    <div className={'row fw-bold'}>
                        <div className={'col'}>
                            <p>총 합계</p>
                        </div>
                        <div className={'col text-end'}>
                            <p>\금액</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'text-center'}>
                <a href="#" id={'complainBtn'}><img className={'pe-3'} src="/img/complainBtn.png" alt="complain"/>숙소 신고하기</a>
            </div>

        </div>
    )
}

export default Payment;