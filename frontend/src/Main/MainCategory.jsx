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

    const categories = ["한옥", "해변가", "수영장", "캠핑장", "캐슬", "사막", "농장", "호수", "북극", "통나무집", "주택"]
    const categoriesImg = ["hanok", "beach", "pool", "campsite", "castle", "desert", "farm", "lakeside", "northPole", "logCabin", "house"]

    const [activeButton, setActiveButton] = useState(categories[0]);

    const [category, setCategory] = useState('');

    const handleClick = (categoryClick) => {
        setActiveButton(categoryClick);
    };

    return (
        <nav className={"navbar navbar-expand-sm mt-3 fixed"}>
            <div className={"container"}>
                {categories.map((categoryClick, index) => {
                    return (
                        <div className={"nav-item"} id={"container"} style={{
                            borderBottom: categoryClick === activeButton ? "2px solid black" : "",
                            opacity: categoryClick === activeButton ? 1 : 0.6,
                        }}>
                            <Link to={"/"}
                                  key={categoryClick}
                                  onClick={() => {
                                      handleClick(categoryClick);
                                      props.categoryValue(categoryClick);
                                  }}>
                                <div className={"d-flex justify-content-center"}>
                                    <img src={`/img/navCategory/${categoriesImg[index]}.jpg`} alt="" style={styles.navImg}/>
                                </div>
                                <p className={"mb-2"} style={styles.navText}>{categoryClick}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </nav>
    );
}

export default MainCategory;