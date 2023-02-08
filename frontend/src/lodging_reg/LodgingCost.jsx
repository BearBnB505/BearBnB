import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {hostInfos} from "./Reducers/HostInfoReducer";
import {costs} from "./Reducers/LodgingCostReducer";

function LodgingCost(){

    const [cost, setCost] = useState(50000);
    const dispatch = useDispatch();
    const lodgingImg = useSelector((state)=>state.lodgingImg.value);
    const chooseDate = useSelector((state)=>state.chooseDate.value);

    console.log(lodgingImg.url);

    const styles = {
        border1:{
            border : "1px solid",
            borderColor : "#DDDDDD" ,
            borderRadius : "15px",
            height : "300px",
            marginTop : "28px",
            backgroundColor :"#fafafa"
        },
        border2 : {
            border : "1px solid",
            borderColor : "#DDDDDD" ,
            borderRadius : "15px",
            height : "150px",
            marginTop : "28px",
            backgroundColor :"#fafafa"
        },
        img :{
            width : "50px",
        },
        input : {
            borderRadius : "10px",
            height : "100px",
            width: "450px",
            textAlign :"center",
            fontSize :"40px",
            fontWeight:"bold",
            borderStyle:"solid",
            borderColor:"#bebebe",
        },
    }
    function plusOnclick(){
        // alert("플러스버튼")
        setCost(cost+5000)
    }
    function minusOnclick(){
        if(0>=cost-5000){
            setCost(0);
        }
        else {
            setCost(cost-5000);
        }
    }
    
    function clickText(){
        alert('text선택함');
    }


    return(
        <div className={"container"}>
            <div className={"row"}>
                <div className={'col-7 mx-auto'} style={{marginTop : "120px"}}>
                    {/*<p>시작일 : {chooseDate.startDate}</p>*/}
                    {/*<p>시작일 : {chooseDate.endDate}</p>*/}
                    <p style={{fontSize :"35px", fontWeight:"bold"}}>이제 요금을 설정하세요</p>
                    <p style={{fontSize : "20px", color : "gray"}}>언제든지 변경하실 수 있습니다.</p>
                    <div style={styles.border1}>
                        <div className="row align-items-center mt-5" style={{marginLeft : "30px"}}>
                            <div className="col">
                                <img src='/concept/minusIcon.png' style={styles.img} onClick={minusOnclick}/>
                            </div>
                            <div className="col">
                                <input type={'text'} value={cost} className={'me-4'} style={styles.input}
                                onChange={(e)=>setCost(Number(e.target.value))}/>
                            </div>
                            <div className="col">
                                <img src='/concept/plusIcon.png' style={styles.img} onClick={plusOnclick} />
                            </div>
                            <p style={{textAlign : "center", fontSize :"20px", marginTop:"10px"}}>/박</p>
                            <p className={"fs-5 mt-2"}>이 지역에서 비슷한 숙소의 요금은 보통 33,000&#8361; ~ 75,000&#8361; 사이입니다.</p>
                            <img src='/concept/info.png' style={{width : '45px', display:"block", margin:"auto"}}/>
                        </div>
                    </div>
                    {/*아래 다른 박스*/}
                    <div style={styles.border2} className={"p-4 mt-5"}>
                        <div className={'row justify-content-lg-between'}>
                            <div className={'col-6'}>
                                <p className={'fs-5 fw-bold'}>단기간에 예약률을 높이는 법</p>
                            </div>
                            <div className={'col-4'}>
                                <input type={'checkbox'} style={{zoom : '2', marginLeft : '80px'}}/>
                            </div>
                            <p>첫 게스트 3명에게 20% 할인 혜택을 제공하여 더 빨리 예약을 받아보세요</p>
                            <p className={'text-decoration-underline'} style={{cursor:'default'}} onClick={clickText}>자세히 알아보기</p>
                        </div>
                    </div>
                </div>
            <footer>
                <Link to ={"/lodgingChooseDate"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingCheck"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"} onClick={()=>{
                    dispatch(costs({cost:cost}))}}>다음</button></Link>
            </footer>
        </div>
        </div>
    )
}
export default LodgingCost;