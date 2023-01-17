import React from "react";
import {Link} from "react-router-dom";

function LodgingFinal(){

    return(
        <div>
        <h2>00님, 환영합니다</h2>

            <footer>
                <Link to ={"/lodgingCheck"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"#"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
    )

}
export default LodgingFinal;