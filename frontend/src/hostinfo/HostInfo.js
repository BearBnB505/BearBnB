import React, {useEffect, useState} from "react";
import HostInfoTitle from "./HostInfoTitle";
import HostInfoContents from "./HostInfoContents";
import './HostInfo.css'
import {useSelector} from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";



const HostInfo=()=>{
    // 수신자
    const [to,setTo] = useState('수신자');
    //발신자
    const [from, setFrom] = useState('발신자');
    //제목
    const [title, setTitle] = useState('제목');
    //내용
    const [contents, setContents] = useState('내용');

    const [re, setRe] = useState(false);

    const titleOnChange = (e) => {

        setTitle(e.target.value);

    }
    console.log('제목')
    console.log(title)
    const contentsOnChange =(e)=>{
        setContents(e.target.value);
        console.log(contents)
    }
    //
    const contact = useSelector((state)=>state.contact.value);
    // setTo(contact.contact);

    // 보내는 사람 이메일주소를 넣습니다.
    // setFrom('dbfl1443@naver.com');

    useEffect(()=>{
        setRe(false)
    },[re]);

    

    
  //  이메일 보내기 버튼 누르면 axios 작동
    const sendContactHost = () => {

        axios.post('http://localhost:8080/sendContactHost',{
            to:contact.contact,
            from:"dbfl1443@naver.com",
            title:title,
            contents:contents
        })
            .then((reg)=>{
                console.log(reg)
                console.log('통신성공')
                Swal.fire({
                    icon: 'success',
                    title: '이메일이 전송되었습니다',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    setRe(true)
                })
            })
            .catch((err) => {
                console.log(err)
                console.log('통신실패')
            })
    }
    
  return(
    <div style={{display:"grid", justifyContent:"center", marginBottom:"100px"}}>
      <HostInfoTitle/>
      <HostInfoContents/>
        <h3 className={"fw-bold mb-4 mt-5"}>호스트에게 이메일로 연락하기</h3>
        <p >아래 내용을 입력하면 호스트에게 바로 연락을 할 수 있습니다.</p>
        <input type={'text'} placeholder={'제목'} className={'form-control'} onChange={titleOnChange}/>
        <textarea name="message" placeholder="메일 내용을 입력해주세요." className={'form-control'} cols="60" rows="20" onChange={contentsOnChange} />
        <button className={'btn btn-primary'}  onClick={sendContactHost}>이메일로 연락하기</button>
    </div>
  )
}

export default HostInfo;