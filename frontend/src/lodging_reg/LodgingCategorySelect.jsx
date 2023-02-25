
import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Link} from "react-router-dom";
import axios from "axios";
import {lodgingNames} from "./Reducers/LodgingNameReducer";
import {category} from "./Reducers/LodgingCategoryReducer";
import {useDispatch, useSelector} from "react-redux";

const LoadingConcept = () => {
    const lodgingNum = useSelector((state) => state.lodgingNum.value);
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
    const dispatch = useDispatch();

    const [isSelect, setSelect] = useState([false, false,false, false,false, false,false, false,false, false,false, false,false,false,false,false,false,
        false, false,false, false,false, false,false, false,false, false,false, false,false,false,false,false,false,]);
    const imgSrc = [
        {
            name : '무선인터넷',
            src : `https://cdn-icons-png.flaticon.com/128/159/159599.png`,
            comfortId : 'ED101'
        },
        {
            name : 'TV',
            src : 'https://cdn-icons-png.flaticon.com/128/3917/3917178.png',
            comfortId : 'ED102'
        },
        {
            name : '에어컨',
            src : 'https://cdn-icons-png.flaticon.com/128/5557/5557928.png',
            comfortId : 'CD101'

        },
        {
            name : '난방',
            src : 'https://cdn-icons-png.flaticon.com/128/637/637213.png',
            comfortId : 'CD102'
        },
        {
            name : '건물 내 무료주차',
            src : 'https://cdn-icons-png.flaticon.com/128/6955/6955528.png',
            comfortId : 'PD101'
        },
        {
            name : '건물 내 유료주차',
            src : 'https://cdn-icons-png.flaticon.com/128/6955/6955528.png',
            comfortId : 'PD102'
        },
        {
            name : '보안카메라',
            src : 'https://cdn-icons-png.flaticon.com/128/1017/1017160.png',
            comfortId : 'SD101'
        },
        {
            name : '화재경보기',
            src :'https://cdn-icons-png.flaticon.com/128/7857/7857330.png',
            comfortId : 'SD102'
        },
        {
            name : '일산화탄소경보기',
            src : 'https://cdn-icons-png.flaticon.com/128/7857/7857351.png',
            comfortId : 'SD103'
        },
        {
            name : '소화기',
            src : 'https://cdn-icons-png.flaticon.com/128/4540/4540000.png',
            comfortId : 'SD104'
        },
        {
            name: '구급상자',
            src : 'https://cdn-icons-png.flaticon.com/128/862/862032.png',
            comfortId : 'SD105'
        },

        ///////////////////////////////////////////////////////////////

        {
            name : '욕조',
            src : 'https://cdn-icons-png.flaticon.com/128/2963/2963979.png',
            comfortId : 'BD101'
        },
        {
            name: '샤워기',
            src : 'https://cdn-icons-png.flaticon.com/128/5085/5085064.png',
            comfortId : 'BD102'
        },
        {
            name : '수건',
            src : 'https://cdn-icons-png.flaticon.com/128/8072/8072328.png',
            comfortId : 'BD103'
        },
        {
            name : '비누',
            src : `https://cdn-icons-png.flaticon.com/128/3014/3014680.png`,
            comfortId : 'BD104'
        },
        {
            name : '화장지',
            src : 'https://cdn-icons-png.flaticon.com/128/3130/3130235.png',
            comfortId : 'BD105'
        },
        {
            name : '헤어드라이어',
            src : 'https://cdn-icons-png.flaticon.com/128/2193/2193739.png',
            comfortId : 'BD106'
        },
        {
            name : '샴푸',
            src : 'https://cdn-icons-png.flaticon.com/128/5163/5163413.png',
            comfortId : 'BD107'
        },
        {
            name : '세탁기',
            src : 'https://cdn-icons-png.flaticon.com/128/114/114564.png',
            comfortId : 'BD108'
        },
        {
            name : '건조기',
            src : 'https://cdn-icons-png.flaticon.com/128/3929/3929105.png',
            comfortId : 'BD109'
        },
        {
            name : '청소용품',
            src : 'https://cdn-icons-png.flaticon.com/128/995/995053.png',
            comfortId : 'BD110'
        },
        {
            name : '침대',
            src :'https://cdn-icons-png.flaticon.com/128/3159/3159436.png',
            comfortId : 'BD201'
        },
        {
            name : '침대시트',
            src : 'https://cdn-icons-png.flaticon.com/128/2963/2963750.png',
            comfortId : 'BD202'
        },
        {
            name : '침구',
            src : 'https://cdn-icons-png.flaticon.com/128/9085/9085403.png',
            comfortId : 'BD203'
        },
        {
            name: '냉장고',
            src : 'https://cdn-icons-png.flaticon.com/128/395/395598.png',
            comfortId : 'KD101'
        },
        {
            name : '전자레인지',
            src : 'https://cdn-icons-png.flaticon.com/128/2333/2333382.png',
            comfortId : 'KD102'
        },
        {
            name: '가스레인지인덕션',
            src : 'https://cdn-icons-png.flaticon.com/128/1041/1041743.png',
            comfortId : 'KD103'
        },
        {
            name : '식기류',
            src : 'https://cdn-icons-png.flaticon.com/128/3959/3959463.png',
            comfortId : 'KD104'
        },
        {
            name : '장기숙박가능',
            src : 'https://cdn-icons-png.flaticon.com/128/3917/3917292.png',
            comfortId : 'SD201'
        },
        {
            name : '반려동물입실가능',
            src : 'https://cdn-icons-png.flaticon.com/128/5068/5068845.png',
            comfortId : 'SD202'
        },
        {
            name: '게스트전용출입문',
            src : 'https://cdn-icons-png.flaticon.com/128/9236/9236795.png',
            comfortId : 'SD203'
        },
        {
            name : '바베큐그릴',
            src : 'https://cdn-icons-png.flaticon.com/128/2335/2335526.png',
            comfortId : 'SD204'
        },
        {
            name: '수영장',
            src : 'https://cdn-icons-png.flaticon.com/128/2520/2520964.png',
            comfortId : 'SD205'
        },
        {
            name : '조식',
            src : 'https://cdn-icons-png.flaticon.com/128/4872/4872787.png',
            comfortId : 'SD206'
        },
    ]

    const db =[];
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

    // const categoryArray= {comfortId:'', usableYn:''};
    const categoryArray = [];
    const arr = imgSrc.map((item, index) => {
        // <Button style={styles.btn} disabledStyle={styles.btnD} disabled={item.disabled} onPress={() => btn(item, index)} />

        // 선택 여부에 따라 배열에 Y 혹은 N을 입력한다. {comfortId:'', deletedYn:''} 형태이다.
        if(isSelect[index]===true){
            // categoryArray.push(imgSrc[index].comfortId)
            // categoryArray.push('Y')
            categoryArray.push({comfortId: imgSrc[index].comfortId, usableYn:'Y',lodgingNum:lodgingNum.num})

        } else if(isSelect[index]===false){
            // categoryArray.push(imgSrc[index].comfortId)
            // categoryArray.push('N')
            categoryArray.push({comfortId: imgSrc[index].comfortId, usableYn:'N',lodgingNum:lodgingNum.num})
        }
    })
    // console.log('categoryArray')
    // console.log(categoryArray)

    // console.log("categoryArray.comfortId");
    // console.log(categoryArray[0].comfortId);

    const dbTest = () =>{

        // const url='http://localhost:8080/insertCategory';
        // const datas=categoryArray
        // axios
        //     .post(url,  datas, {
        //         headers: {
        //             "Content-Type": `application/json`,
        //         },
        //     })
        //     .then((res) => {
        //         console.log(res);
        //         console.log('데이터 이동 성공')
        //     }).catch(err=>{
        //         console.log(err)
        // });

        // axios({
        //     method:"post",
        //     url:"http://localhost8080/insertCategory"
        //
        // })

        // axios.post("http://localhost8080/insertCategory", null,{
        //     // category: categoryArray,
        //     category:categoryArray
        // })
        //     .then(function (response) {
        //         // response
        //         console.log("통신성공")
        //     }).catch(function (error) {
        //     // 오류발생시 실행
        //     console.log(error)
        // })

        // axios({
        //     url: 'http://localhost:8080/insertCategory',
        //     method: 'post',
        //     // data:categoryArray
        //     data:JSON.stringify(categoryArray),
        //     // contentType:'application/json; charset=UTF-8',
        //     dataType:'json',
        // })
        //     .then(function a(response) {
        //         console.log(response)
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        axios
            .post('http://localhost:8080/insertCategory',  categoryArray, {
                headers: {
                    "Content-Type": `application/json`,
                },
            })
            .then((res) => {
                console.log(res);
            });
    }



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
                    <Link to ={"/reg/lodgingBedSelect"}><button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }} >이전</button></Link>
                    <Link to = {"/reg/lodgingImg"}><button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }}
                                                           onClick={dbTest}>다음</button></Link>
                </footer>
            </div>
        </div>
    );
};


export default LoadingConcept;