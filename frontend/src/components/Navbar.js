import React from "react";
import {Link, Outlet} from "react-router-dom";

//2023-01-18 네브바 생성
const Navbar = () =>{
    return (
        <div className={"container"}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" >
                        <img src="/img/BearBnB_logo.png" width='158px'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={"nav-link"} to="/admin">회원관리</Link>
                                {/*<a className="nav-link active" aria-current="page">회원관리</a>*/}
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to="lodging">숙소관리</Link>
                                {/*<a className="nav-link" href="#">숙소관리</a>*/}
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to="report">신고관리</Link>
                                {/*<a className="nav-link" href="#">신고관리</a>*/}
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to="sales">매출관리</Link>
                                {/*<a className="nav-link" href="#">매출관리</a>*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>

    );
};


export default Navbar;