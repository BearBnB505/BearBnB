
import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {bedSelects} from "./Reducers/BedSelectReducer";

const LodgingBedSelect = () => {
    const [isSelect, setSelect] = useState([false, false,false, false,false]);
    const [bedSelect, setBedSelect] = useState('');
    const lodgingBasicInfo = useSelector((state) => state.lodgingBasicInfo.value)
    const user = useSelector((state)=>state.user.value)
    const dispatch = useDispatch();
    const locationDetail = useSelector((state) => state.locationDetail.value)
    console.log("bedselect국가")
    console.log(locationDetail.nation)
    console.log("address1")
    console.log(locationDetail.address1)
    console.log("address2")
    console.log(locationDetail.address2)
    console.log("zipcode")
    console.log(locationDetail.zipCode)

    const imgSrc = [
        {
            name : '싱글',
        },
        {
            name : '슈퍼싱글',
        },
        {
            name : '더블',
        },
        {
            name : '퀸사이즈',
        },
        {
            name : '킹사이즈',
        },
    ]

    //출력 잘 되고 있다. 문제는 입력하는 파트인듯.
    const getButton = (id) => {
        return (
            <div className={"container"}>
                {/*<p>guest : {lodgingBasicInfo.guest}</p>*/}
                {/*<p>bedroom : {lodgingBasicInfo.bedroom}</p>*/}
                {/*<p>bathroom : {lodgingBasicInfo.bathroom}</p>*/}
                {/*<p>bed : {lodgingBasicInfo.bed}</p>*/}
                {/*<p>bed : {user.name}</p>*/}
                {/*<p>bed : {user.email}</p>*/}
                {/*<p>bed : {user.age}</p>*/}
                <Pressable
                    style={[
                        {backgroundColor: isSelect[id] ? 'gray' : 'white'},
                        {border : "1px solid black"},
                        {width : "180px"},
                        {borderRadius : "20px"},
                        {marginLeft : "100px"}
                    ]}
                    onPress={() => {
                        setSelect([
                            ...isSelect.slice(0, id),
                            !isSelect[id],
                            ...isSelect.slice(id + 1),
                            setBedSelect(isSelect[id]!== true? imgSrc[id].name:''),
                            console.log(bedSelect)
                        ]);
                    }}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col'}>
                                <p style={{textAlign : "center"}} className={"mt-3 fs-5"}>{imgSrc[id].name}</p>
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
                {/*<p>{bedSelect}</p>*/}
                <p style = {styles.font}> 침대 종류를 선택해주세요</p>
                <div className={"row mx-auto"}>
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
                </div>
            </div>
            <footer>
                <Link to ={"/reg/lodgingBasicInfo"}><button className={"btn btn-white position-absolute start-0 bottom-0"} style={{marginBottom:"70px", marginLeft:"120px", width:"200px", fontSize:"25px", padding:"8px", }} >이전</button></Link>
                <Link to = {"/reg/lodgingSecondWelcome"}><button className={"btn btn-primary position-absolute end-0 bottom-0"} style={{marginBottom:"70px", marginRight:"120px", width:"200px", fontSize:"25px", padding:"8px", }} onClick={()=>{
                    dispatch(bedSelects({bedSelects:bedSelect}))}}>다음</button></Link>
            </footer>
        </div>
    );
};

const styles = StyleSheet.create({

    font :{
        fontSize : "30px",
        fontWeight : 'bold',
        marginTop : "200px",
        marginBottom : "50px",
        textAlign : "center"
    },
    img :{
        width : "100px",
        display: "block",
        margin :"auto"

    }
});

export default LodgingBedSelect;