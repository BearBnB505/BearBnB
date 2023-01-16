import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Link} from "react-router-dom";

const LoadingConceptTest = () => {
    const [isSelect, setSelect] = useState([false, false, false,false,false,false,false,false,false,false,false]);

    const getButton = (id) => {
        return (
            <div className={"container"}>

            <Pressable
                style={[
                    styles.button,
                    {backgroundColor: isSelect[id] ? 'gray' : 'white'},
                ]}
                onPress={() => {
                    setSelect([
                        ...isSelect.slice(0, id),
                        !isSelect[id],
                        ...isSelect.slice(id + 1),
                    ]);
                }}>
                <img src="/concept/apt.jpg" className={"mt-3"} style={styles.img}/>
                <p>아파트</p>
            </Pressable>
                <footer>
                <Link to ={"/lodgingWelcome"}><button className={"btn btn-light position-absolute start-0 bottom-0 ms-5 mb-3"} >이전</button></Link>
                <Link to = {"/lodgingMap"}><button className={"btn btn-primary position-absolute end-0 bottom-0 me-5 mb-3"}>다음</button></Link>
                </footer>
            </div>

        );
    };

    return (
        <div>
        <view style={styles.con}>
            <p style = {styles.font}> 다음 중 숙소를 가장 잘 설명한 것은 무엇인가요?</p>
            <view style={styles.box}>
            <view style={styles.button} >
                {getButton(0)}
                {getButton(1)}
                {getButton(2)}
                {getButton(3)}
                {getButton(4)}
                {getButton(5)}
                {getButton(6)}
                {getButton(7)}
                {getButton(8)}
                {getButton(9)}
                {getButton(10)}
            </view>
            </view>

        </view>

        </div>
    );
};

const styles = StyleSheet.create({

    con : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    box : {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
    },


        button : {
            flex : 1,
            borderStyle : "1px",
            width : "180px",
            borderRadius : "30px",
            height : "180px",
            marginTop : "15px",
            // alignItems:'stretch',
            // justifyContent: 'space-between',
        },
        font :{
            flex :1,
            fontSize : "30px",
            fontWeight : 'bold',
            marginTop : "90px"
        },
        img :{
            width : "100px",
            display: "block",
            margin :"auto"

        }
});

export default LoadingConceptTest;