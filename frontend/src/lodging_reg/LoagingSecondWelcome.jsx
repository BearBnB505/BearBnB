import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReactPlayer from 'react-player'

function LodgingSecondWelcome(){

    const styles = {
        font:{

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
                    <p>2단계</p>
                    <p id={"title"} style = {styles.title}>숙소의 매력을<br/> 돋보이게 하세요</p><br/>
                    <p>이 단계에서는 숙소에 갖춰진 편의시설과 사진 5장 이상을 추가한 후<br/> 숙소 이름과 설명을 작성하시면 됩니다.</p>

                </div>
                <video autoPlay muted loop style = {styles.video} >
                    <source src="https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high" type={"video/mp4"} />
                </video>

            </div>

            <footer>
                <Link to ={"#"}></Link><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button>
                <Link to = {"/lodgingConceptTest"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
    )
}
export default LodgingSecondWelcome;