import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useRef} from "react";



function LodgingConcept(){

    const [click, setClick] = useState(false);

    const clickButton = () =>{
        setClick(true);
    }


    const styles ={

        font :{
            fontSize : "30px",
            fontWeight : 'bold',
            marginTop : "90px"
        },
        button : {
            borderStyle : "1px",
            width : "160px",
            borderRadius : "30px",
            height : "160px",
            marginTop: "100px",
            backgroundColor:"white"
        },

        buttonA : {
            borderStyle : "1px",
            width : "160px",
            borderRadius : "30px",
            height : "160px",
            marginTop: "100px",
            backgroundColor:"black"
        },
    }





    return(
        <div className={"container"}>
            <p style = {styles.font}> 다음 중 숙소를 가장 잘 설명한 것은 무엇인가요?</p>
            <div className={"row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"}>
                <button className={"ms-3 col-sm-3"} style={click ? styles.button : styles.buttonA} onClick={clickButton}>
                    <img src="/concept/apt.jpg" className={"mt-3"}/>
                    <p>아파트</p>
                </button>

                <button className={"ms-3 col-sm-3"} style={click ? styles.button : styles.buttonA} onClick={clickButton} >
                    <img src="/concept/house.jpg" className={"mt-3"}/>
                    <p>단독주택</p>
                </button>
                {/*    <button className={"ms-3 col-sm-3"} style = {styles.button} >*/}
                {/*        <img src="/concept/Hanok.jpg"/>*/}
                {/*        <p>한옥</p>*/}
                {/*    </button>*/}
                {/*    <button className={"ms-3 col-sm-3"} style = {styles.button}>*/}
                {/*        <img src="/concept/beach.jpg"/>*/}
                {/*        <p>해변가</p>*/}
                {/*    </button>*/}
                {/*    <button className={"ms-3 col-sm-3"} style = {styles.button}>*/}
                {/*        <img src="/concept/swimmingPool.jpg"/>*/}
                {/*        <p>수영장</p>*/}
                {/*    </button>*/}
                {/*    <button className={"ms-3 col-sm-3"} style = {styles.button}>*/}
                {/*        <img src="/concept/camping.jpg"/>*/}
                {/*        <p>캠핑장</p>*/}
                {/*    </button>*/}
                {/*    <button className={"ms-3 col"} style = {styles.button}>*/}
                {/*        <img src="/concept/Castle.jpg"/>*/}
                {/*        <p>캐슬</p>*/}
                {/*    </button>*/}
                {/*    <button className={"ms-3 col"} style = {styles.button}>*/}
                {/*        <img src="/concept/desert.jpg"/>*/}
                {/*        <p>사막</p>*/}
                {/*    </button>*/}
                {/*    <button className={"ms-3 col"} style = {styles.button}>*/}
                {/*        <img src="/concept/farm.jpg"/>*/}
                {/*        <p>농장</p>*/}
                {/*    </button>*/}
                {/*    <button className={"ms-3 col"} style = {styles.button}>*/}
                {/*        <img src="/concept/lake.jpg"/>*/}
                {/*        <p>호수</p>*/}
                {/*    </button>*/}
                {/*    <button className={"ms-3 col"} style = {styles.button}>*/}
                {/*        <img src="/concept/NorthPole.jpg"/>*/}
                {/*        <p>북극</p>*/}
                {/*    </button>*/}
                {/*    <button className={"ms-3 col"} style = {styles.button}>*/}
                {/*        <img src="/concept/shack.jpg"/>*/}
                {/*        <p>통나무집</p>*/}
                {/*    </button>*/}
            </div>
            <Link to ={"/lodgingWelcome"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
            <Link to = {"/lodgingMap"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            {/*</div>*/}
        </div>
    )
}
export default LodgingConcept;