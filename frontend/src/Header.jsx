import React from "react";
import {Link} from "react-router-dom";

function Header(props) {

    const pillStart = {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    }

    const pillEnd = {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    }

    return (
        <div className={"mt-3"}>
            <nav className={"navbar navbar-expand-sm navbar-white bg-white fixed-top"}>
                <div className={"container mx-5 justify-content-between"}>
                    <Link to={"/"}><img src="/img/BearBnB_logo.png" alt="" style={{width:130}}/></Link>

                    <div className={"nav-item"}>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-primary px-3 py-2" style={pillStart}>어디든지</button>
                            <button type="button" className="btn btn-outline-primary px-3 py-2">언제든 일주일</button>
                            <button type="button" className="btn btn-outline-primary px-3 py-2" style={pillEnd}>게스트 추가</button>
                        </div>
                    </div>
                    <div className={"nav-item"}>
                        <a href="#" className={"nav-link"}>Menu</a>
                    </div>

                </div>
            </nav>

            {/*<hr/>*/}
        </div>
    );
}

export default Header;