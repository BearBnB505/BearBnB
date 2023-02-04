import React from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {hostIdUrl} from "./HostIdReducer";


function LodgingFinal(){

    // const idImageUrl = useSelector((state)=>state.hostIdUrl.value);
    const user = useSelector((state) => state.user.value);
    const userId = useSelector((state)=>state.hostIdUrl.value);

    const styles ={
        body :{
            width :"100vw",
            height:"100vh",
            backgroundColor:"black",
            color : "white"
        },
        font :{
            position : 'absolute',
            top : "30%",
            left : "22%"
        },
    }


    return(
        <div style = {styles.body}>
            <div className={'container'}>
            <div  className={'row'}>
                <div className={'col-6'} style={styles.font}>
                    <p style={{color: "white"}}> Name : {user.name} </p>
                    <p style={{fontSize : "60px"}}>{userId.idUrl}님, 환영합니다</p>
                    <p style={{fontSize : '30px'}}>베어비앤비 호스트가 되신 것을 진심으로 환영합니다. 숙소 호스팅을
                        통해 게스트에게 놀라운 경험을 선사하는데 동참해주셔서 감사합니다</p>
                    <p style = {{fontSize : '20px', color : '#D0B8A8'}}>베어비앤비 설립자 일동</p>
                    <img src={userId.idUrl}/>
                </div>

            </div>
            </div>
            <footer>
                <Link to = {"#"}><button className={"btn btn-danger position-absolute end-0 bottom-0 me-5 mb-3"}>완료하기</button></Link>
            </footer>
        </div>
    )

}
export default LodgingFinal;