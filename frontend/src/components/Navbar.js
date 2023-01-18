import React from "react";
import {Link} from "react-router-dom";

//2023-01-18 네브바 생성
const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BearBnB</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Table1">회원관리</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Table2">숙소관리</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Table3">신고관리</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Table4">매출관리</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;