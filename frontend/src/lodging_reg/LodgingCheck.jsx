import React from "react";
import {Link} from "react-router-dom";

function LodgingCheck(){

    return(
        <div>
            <h2>마지막 검토</h2>
            <footer>
                <Link to ={"/lodgingCost"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingFinal"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
    )

}
export default LodgingCheck;