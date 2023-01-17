import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Link} from "react-router-dom";

const LoadingConcept = () => {
    const [isSelect, setSelect] = useState([false, false,false, false,false, false,false, false,false, false,false, false]);
    const imgSrc = [
        {
            name : '아파트',
            src : `/concept/apt.jpg`,
        },
        {
            name : '주택',
            src : '/concept/house.jpg'
        },
        {
            name : '한옥',
            src : '/concept/Hanok.jpg'
        },
        {
            name : '해변가',
            src : '/concept/beach.jpg'
        },
        {
            name : '수영장',
            src : '/concept/swimmingPool.jpg'
        },
        {
            name : '캠핑장',
            src : '/concept/camping.jpg'
        },
        {
            name : '캐슬',
            src : '/concept/Castle.jpg'
        },
        {
            name : '사막',
            src :'/concept/desert.jpg'
        },
        {
            name : '농장',
            src : '/concept/farm.jpg'
        },
        {
            name : '호수',
            src : '/concept/lake.jpg',
        },
        {
            name: '북극',
            src : '/concept/NorthPole.jpg'
        },
        {
            name : '통나무집',
            src : '/concept/shack.jpg'
        }
    ]

    const getButton = (id) => {
        return (
            <div className={"container"}>
                <Pressable
                    style={[
                        {backgroundColor: isSelect[id] ? 'gray' : 'white'},
                        {width : "180px"},
                        {border : "1px solid black"},
                        {borderRadius : "20px"}
                    ]}
                    onPress={() => {
                        setSelect([
                            ...isSelect.slice(0, id),
                            !isSelect[id],
                            ...isSelect.slice(id + 1),
                        ]);
                    }}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col'}>
                                <img src={imgSrc[id].src} className={"mt-4"} style={styles.img}/>
                                <p style={{textAlign : "center"}} className={"mt-2"}>{imgSrc[id].name}</p>
                            </div>
                        </div>
                    </div>

                </Pressable>

            </div>

        );
    };

    return (
        <div className={"container"}>
            <div className={"row"}>
                <p className={""} style = {styles.font}> 다음 중 숙소를 가장 잘 설명한 것은 무엇인가요?</p>
                <div className={"row"}>
                    <div className={"col-2 mt-5"}>
                        {getButton(0)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(1)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(2)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(3)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(4)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(5)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(6)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(7)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(8)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(9)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(10)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(11)}
                    </div>

                </div>
            </div>
            <footer>
                <Link to ={"/lodgingWelcome"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingMap"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
            </footer>
        </div>
    );
};

const styles = StyleSheet.create({

    font :{
        fontSize : "30px",
        fontWeight : 'bold',
        marginTop : "120px",
        textAlign : "center"
    },
    img :{
        width : "100px",
        display: "block",
        margin :"auto"

    }
});

export default LoadingConcept;