import React from "react";

function MainCategory(props) {

    const styles = {
        navImg: {
            width: 25,
        },
        navText: {
            color: "black"
        },
    };

    return (
        <nav className={"navbar navbar-expand-sm mt-2 fixed"}>
            <div className={"container"}>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/hanok.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>한옥</p>
                    </a>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/beach.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>해변가</p>
                    </a>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/pool.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>수영장</p>
                    </a>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/campsite.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>캠핑장</p>
                    </a>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/castle.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>캐슬</p>
                    </a>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/desert.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>사막</p>
                    </a>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/farm.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>농장</p>
                    </a>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/lakeside.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>호수</p>
                    </a>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/northPole.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>북극</p>
                    </a>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/logCabin.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>통나무집</p>
                    </a>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <a href="#">
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/house.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>주택</p>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default MainCategory;