import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReactPlayer from 'react-player'

function LodgingWelcome(){

    const styles = {
        font:{
            // position: "relative",
            // display : 'block',
            // float : 'left',
            // textAlign:"left",
            // marginRight
            textAlign: "left",
            margin : "auto",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "300px"




        },
        title : {
            fontSize : "50px",
            fontWeight : "bold",
        },

        video : {
            position : "absolute",
            float : "right",
            height : "60%",
            marginTop : "160px",
        },

        container : {
            overflowX: "hidden"
        }
    }


    return(
        <div className={"container"} style={styles.container}>
            <div className={"row"}>
                <div style = {styles.font}>
                    <p>1단계</p>
                    <p id={"title"} style = {styles.title}>숙소 정보를 알려주세요</p><br/>
                    <p>먼저 숙소 유형을 선택하고, 그런 다음 숙소 위치와 수용 가능 인원을 알려주세요.</p>

                </div>
                <video autoPlay muted loop style = {styles.video} >
                    <source src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?
                        v_q=high" type={"video/mp4"} />
                </video>

            </div>

            <footer>
                <Link to ={"#"}></Link><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button>
                <Link to = {"/lodgingConceptTest"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
    )
}
export default LodgingWelcome;