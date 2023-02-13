import React from "react";
import {Link, Outlet} from "react-router-dom";
import HeaderModal from "../../Header/HeaderModal";

function LodgingRegHeader(){
    return(
        <div>
            <div className={"border-bottom pb-2"} id={"div-header"}>
                <nav className={"navbar navbar-expand-sm navbar-white bg-white mt-1 fixed"} id={"header_nav"}>
                    <div className={"container justify-content-between"} style={{width: 1900}}>
                        <Link to={"/"}><img src="/img/BearBnB_logo.png" alt="BearBnB" style={{width:130}}/></Link>
                    </div>
                </nav>
            </div>

            {/*<Outlet />*/}
        </div>
    )
}
export default LodgingRegHeader;