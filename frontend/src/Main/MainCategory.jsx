import React, {useState} from "react";
import {Link} from "react-router-dom";

function MainCategory(props) {

    const styles = {
        navImg: {
            width: 25,
        },
        navText: {
            color: "black"
        },
    };

    const [category, setCategory] = useState('');

    return (
        <nav className={"navbar navbar-expand-sm mt-2 fixed"}>
            <div className={"container"}>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('한옥')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/hanok.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>한옥</p>
                    </Link>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('해변가')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/beach.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>해변가</p>
                    </Link>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('수영장')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/pool.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>수영장</p>
                    </Link>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('캠핑장')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/campsite.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>캠핑장</p>
                    </Link>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('캐슬')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/castle.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>캐슬</p>
                    </Link>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('사막')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/desert.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>사막</p>
                    </Link>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('농장')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/farm.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>농장</p>
                    </Link>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('호수')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/lakeside.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>호수</p>
                    </Link>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('북극')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/northPole.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>북극</p>
                    </Link>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('통나무집')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/logCabin.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>통나무집</p>
                    </Link>
                </div>
                <div className={"nav-item"} id={"container"}>
                    <Link to={"/"} onClick={() => props.categoryValue('주택')}>
                        <div className={"d-flex justify-content-center"}>
                            <img src="/img/navCategory/house.jpg" alt="" style={styles.navImg}/>
                        </div>
                        <p style={styles.navText}>주택</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default MainCategory;