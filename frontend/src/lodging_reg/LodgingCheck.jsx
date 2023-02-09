import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


function LodgingCheck(){
    const cost = useSelector((state) => state.lodgingCost.value);
    const name = useSelector((state) => state.lodgingRealName.value);

    const styles = {
        box : {
            boxShadow:" 5px 5px 10px gray",
            width : "350px",
            height : "400px",
            borderRadius : "25px",
            marginTop:"50px"
        }
    }

    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-8 mx-auto'} style={{marginTop :"110px"}}>
                    <p style={{fontSize : "45px", fontWeight : "bold"}}>숙소 검토하기</p>
                    <p style={{color:"gray", fontSize :"20px"}}>게스트에게 표시되는 정보는 다음과 같습니다. 모든 정보가 정확한지 확인하세요.</p>
                    <div className="row justify-content-between">
                    <div className={'col-2'}>
                        {/*왼쪽 사진부분*/}
                        <div style={styles.box}>
                            <img src='/concept/house.jpg' style={{width :"300px"}}className={"ms-4"}/>
                            <div className={'row justify-content-evenly mt-3'}>
                                <div className={'col-4 ms-3'}>
                                    <p>{name.name}</p>
                                    <p>{cost.cost}</p>
                                </div>
                                <div className={'col-4'} >
                                    <p>신규⭐</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*    오른쪽 글 부분*/}
                    <div className={'col-6'}>
                        <p className={'fs-4 fw-bold mt-5'}>다음 단계</p>
                        <div className={'row'}>
                            <div className={'col-1'}>
                                <img src='/concept/checkbox2.png' style={{width :"30px"}}/>
                            </div>
                            <div className={'col-10'}>
                                <p className={'fs-5 fw-bold'}>세부 정보를 확인하고 숙소를 등록하세요</p>
                                <p>본인 인증이 필요하거나 현지 정부에 등록해야 하는 경우 안내해드리겠습니다.</p>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-1'}>
                                <img src='/concept/calender.png' style={{width :"30px"}}/>
                            </div>
                            <div className={'col-10'}>
                                <p className={'fs-5 fw-bold'}>달력 설정하기</p>
                                <p>숙소 예약 가능일을 선택해주세요. 숙소는 등록 완료 후 24시간이 지나면 일반에 공개됩니다.</p>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-1'}>
                                <img src='/concept/pencil.png' style={{width :"30px"}}/>
                            </div>
                            <div className={'col-10'}>
                                <p className={'fs-5 fw-bold'}>설정 변경하기</p>
                                <p>숙소 이용규칙 설정, 환불 정책 선택, 게스트의 예약 방식 선택 등 필요한 작업을 하세요.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <footer>
                    <Link to ={"/reg/lodgingCost"}><button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }} >이전</button></Link>
                    <Link to = {"/reg/lodgingFinal"}><button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }}>다음</button></Link>
                </footer>
            </div>
        </div>
    )

}
export default LodgingCheck;