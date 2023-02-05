
import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Link} from "react-router-dom";

const LoadingConcept = () => {

    const styles = {
        footer : {
            position : "fixed",
            zIndex : 1,
            backgroundColor : "white",
            left :0,
            right : 0,
            bottom : 0,
            height : "5rem",
        },
        font : {
            textAlign : "left",
            display : "block",
            margin : "auto",
            width: "100%",
            marginTop : "100px"
        },
        img : {
            width:"60px",
            display : "block",
            margin : "auto",
            // textAlign : "center",

        }
    }

    const [isSelect, setSelect] = useState([false, false,false, false,false, false,false, false,false, false,false, false,false,false,false,false,false,
        false, false,false, false,false, false,false, false,false, false,false, false,false,false,false,false,false,]);
    const imgSrc = [
        {
            name : '무선인터넷',
            src : `https://cdn-icons-png.flaticon.com/128/159/159599.png`,
        },
        {
            name : 'TV',
            src : 'https://cdn-icons-png.flaticon.com/128/3917/3917178.png'
        },
        {
            name : '에어컨',
            src : 'https://cdn-icons-png.flaticon.com/128/5557/5557928.png'
        },
        {
            name : '난방',
            src : 'https://cdn-icons-png.flaticon.com/128/637/637213.png'
        },
        {
            name : '건물 내 무료주차',
            src : 'https://cdn-icons-png.flaticon.com/128/6955/6955528.png'
        },
        {
            name : '건물 내 유료주차',
            src : 'https://cdn-icons-png.flaticon.com/128/6955/6955528.png'
        },
        {
            name : '보안카메라',
            src : 'https://cdn-icons-png.flaticon.com/128/1017/1017160.png'
        },
        {
            name : '화재경보기',
            src :'https://cdn-icons-png.flaticon.com/128/7857/7857330.png'
        },
        {
            name : '일산화탄소경보기',
            src : 'https://cdn-icons-png.flaticon.com/128/7857/7857351.png'
        },
        {
            name : '소화기',
            src : 'https://cdn-icons-png.flaticon.com/128/4540/4540000.png',
        },
        {
            name: '구급상자',
            src : 'https://cdn-icons-png.flaticon.com/128/862/862032.png'
        },

        ///////////////////////////////////////////////////////////////

        {
            name : '욕조',
            src : 'https://cdn-icons-png.flaticon.com/128/2963/2963979.png'
        },
        {
            name: '샤워기',
            src : 'https://cdn-icons-png.flaticon.com/128/5085/5085064.png'
        },
        {
            name : '수건',
            src : 'https://cdn-icons-png.flaticon.com/128/8072/8072328.png'
        },
        {
            name : '비누',
            src : `https://cdn-icons-png.flaticon.com/128/3014/3014680.png`,
        },
        {
            name : '화장지',
            src : 'https://cdn-icons-png.flaticon.com/128/3130/3130235.png'
        },
        {
            name : '헤어드라이어',
            src : 'https://cdn-icons-png.flaticon.com/128/2193/2193739.png'
        },
        {
            name : '샴푸',
            src : 'https://cdn-icons-png.flaticon.com/128/5163/5163413.png'
        },
        {
            name : '세탁기',
            src : 'https://cdn-icons-png.flaticon.com/128/114/114564.png'
        },
        {
            name : '건조기',
            src : 'https://cdn-icons-png.flaticon.com/128/3929/3929105.png'
        },
        {
            name : '청소용품',
            src : 'https://cdn-icons-png.flaticon.com/128/995/995053.png'
        },
        {
            name : '침대',
            src :'https://cdn-icons-png.flaticon.com/128/3159/3159436.png'
        },
        {
            name : '침대시트',
            src : 'https://cdn-icons-png.flaticon.com/128/2963/2963750.png'
        },
        {
            name : '침구',
            src : 'https://cdn-icons-png.flaticon.com/128/9085/9085403.png',
        },
        {
            name: '냉장고',
            src : 'https://cdn-icons-png.flaticon.com/128/395/395598.png'
        },
        {
            name : '전자레인지',
            src : 'https://cdn-icons-png.flaticon.com/128/2333/2333382.png'
        },
        {
            name: '가스레인지인덕션',
            src : 'https://cdn-icons-png.flaticon.com/128/1041/1041743.png'
        },
        {
            name : '식기류',
            src : 'https://cdn-icons-png.flaticon.com/128/3959/3959463.png'
        },
        {
            name : '장기숙박가능',
            src : 'https://cdn-icons-png.flaticon.com/128/3917/3917292.png'
        },
        {
            name : '반려동물입실가능',
            src : 'https://cdn-icons-png.flaticon.com/128/5068/5068845.png',
        },
        {
            name: '게스트전용출입문',
            src : 'https://cdn-icons-png.flaticon.com/128/9236/9236795.png'
        },
        {
            name : '바베큐그릴',
            src : 'https://cdn-icons-png.flaticon.com/128/2335/2335526.png'
        },
        {
            name: '수영장',
            src : 'https://cdn-icons-png.flaticon.com/128/2520/2520964.png'
        },
        {
            name : '조식',
            src : 'https://cdn-icons-png.flaticon.com/128/4872/4872787.png'
        },
    ]

    const getButton = (id) => {
        return (
            <div className={"container"}>
                <Pressable
                    style={[
                        {backgroundColor: isSelect[id] ? 'gray' : 'white'},
                        {width : "160px"},
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
                                <p style={{textAlign : "center"}} className={"mt-3 fw-bold"}>{imgSrc[id].name}</p>
                            </div>
                        </div>
                    </div>

                </Pressable>

            </div>

        );
    };

    console.log(isSelect[0]);

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div style={styles.font} className={"p-3"}>
                    <h3 className={"fw-bold"} style={{fontSize :"35px"}}>숙소 편의시설 정보를 추가하세요</h3>
                    <p className={"fs-5 mt-4"} style={{color:"gray"}}>여기에 추가하려는 편의시설이 보이지 않더라도 걱정하지 마세요! 숙소를 등록한 후에 편의시설을 추가할 수 있습니다.</p>
                </div>
                <div className={"row"}>
                    <p className={"mt-5 p-4"} style={{fontSize : "20px", fontWeight : "bolder"}}>어떤 서비스를 제공하나요?</p>
                    <div className={"col-2 mt-2"}>
                        {getButton(0)}
                    </div>
                    <div className={"col-2 mt-2"}>
                        {getButton(1)}
                    </div>
                    <div className={"col-2 mt-2"}>
                        {getButton(2)}
                    </div>
                    <div className={"col-2 mt-2"}>
                        {getButton(3)}
                    </div>
                    <div className={"col-2 mt-2"}>
                        {getButton(4)}
                    </div>
                    <div className={"col-2 mt-2"}>
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
                    <p className={"mt-5 p-4"} style={{fontSize : "20px", fontWeight : "bolder"}}>제공하는 물품을 선택해주세요</p>
                    <div className={"col-2 mt-2"}>
                        {getButton(11)}
                    </div>
                    <div className={"col-2 mt-2"}>
                        {getButton(12)}
                    </div>
                    <div className={"col-2 mt-2"}>
                        {getButton(13)}
                    </div>
                    <div className={"col-2 mt-2"}>
                        {getButton(14)}
                    </div>
                    <div className={"col-2 mt-2"}>
                        {getButton(15)}
                    </div>
                    <div className={"col-2 mt-2"}>
                        {getButton(16)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(17)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(18)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(19)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(20)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(21)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(22)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(23)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(24)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(25)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(26)}
                    </div>
                    <div className={"col-2 mt-5"}>
                        {getButton(27)}
                    </div>
                    <p className={"mt-5 p-4"} style={{fontSize : "20px", fontWeight : "bolder"}}>특별히 내세울 만한 제공 서비스가 있나요?</p>
                    <div className={"col-2 mt-2"} style={{marginBottom : "200px"}}>
                        {getButton(28)}
                    </div>
                    <div className={"col-2 mt-2"}>
                        {getButton(29)}
                    </div>
                    <div className={"col-2 mt-2 "}>
                        {getButton(30)}
                    </div>
                    <div className={"col-2 mt-2 "}>
                        {getButton(31)}
                    </div>
                    <div className={"col-2 mt-2 "}>
                        {getButton(32)}
                    </div>
                    <div className={"col-2 mt-2 "}>
                        {getButton(33)}
                    </div>
                </div>
                <footer style={styles.footer} className={"mt-5"}>
                    <Link to ={"/lodgingBedSelect"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                    <Link to = {"/lodgingImg"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
                </footer>
            </div>
        </div>
    );
};

// const styles = StyleSheet.create({
//
//     img :{
//         width : "10px",
//         display: "block",
//         margin :"auto",
//         textAlign : 'center'
//
//     }
// });

export default LoadingConcept;