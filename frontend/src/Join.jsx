import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {
    FloatingLabel,
    InputGroup,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle
} from "react-bootstrap";
import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import DropdownItem from "react-bootstrap/DropdownItem";
import axios from "axios";
import Swal from "sweetalert2";


function Join() {

    const [show, setShow] = useState(false);
    //pw = >passwordConfirm
    const [insertFirstName,setInsertFirstName] = useState('');
    const [insertLastName,setInsertLastName] = useState('');
    const [insertFullName,setInsertFullName] = useState('');
    const [insertBirth,setInsertBirth] = useState('');
    // const [insertEmail,setInsertEmail] = useState('');
    const [insertTelNum,setInsertTelNum] = useState('');
    const [insertCountry,setInsertCountry] = useState('');
    const [insertGender,setInsertGender] = useState('');

    // 올해 년도 구하기
    let now = new Date();
    let thisYear = now.getFullYear();
    const numberThisYear = Number(thisYear);

    // 길이 검사
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [birth, setBirth] = useState(0)

    //유효성 검사
    const [isPassword, setIsPassword] = useState('')
    const [isPasswordConfirm, setIsPasswordConfirm] = useState('')
    const [isEmail, setIsEmail] = useState('')
    const [isBirth, setIsBirth] = useState(0)

    //메세지
    const [emailMessage, setEmailMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
    const [birthMessage, setBirthMessage] = useState('');


    //미성년자 체크
    const onChangeBirth = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        const birthCurrent = Number((e.target.value).slice(0,4))
        const insertBirths = e.target.value;

        setBirth(insertBirths);
        setInsertBirth(insertBirths);

        console.log(insertBirth)

        const age = numberThisYear-birthCurrent;
        console.log(age);
        if(age < 19){
            setBirthMessage('미성년자는 가입할 수 없습니다.')
            setIsBirth('error')
        } else {
            setBirthMessage('')
            setIsBirth('success')
        }
    },[]);

    // 이메일 형식 체크
    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        const emailCurrent = e.target.value
        setEmail(emailCurrent)



        if (!emailRegex.test(emailCurrent)) {
            setEmailMessage('틀린 이메일 형식입니다.')
            setIsEmail('error')
        } else {
            setEmailMessage('올바른 이메일 형식입니다.')
            setIsEmail('success')
        }
    }, [])
    // console.log(email);//email확인

    //비밀번호 숫자, 영문자, 특수문자
    const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)
        console.log(password)

        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요')
            setIsPassword('error')
        } else {
            setPasswordMessage('안전한 비밀번호입니다.')
            setIsPassword('success')
        }
    }, [])

    //비밀번호 더블 체크
    const onChangePasswordConfirm = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const passwordConfirmCurrent = e.target.value
            setPasswordConfirm(passwordConfirmCurrent)

            if (password === passwordConfirmCurrent) {
                setPasswordConfirmMessage('비밀번호가 동일합니다.')
                setIsPasswordConfirm('success')
            } else {
                setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.')
                setIsPasswordConfirm('error')
            }
        },
        [password]
    )

    //이름 입력값
    // const onChangeinputFirstName =(e)=>{
    //     console.log(e.target.value)
    //
    // }

    const onChangeinputFirstName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const firstName = e.target.value
        setInsertFirstName(firstName);
    }, [])

    const onChangeInputLastName = (e) =>{
        setInsertLastName(e.target.value)
    }

    const onChangeTelNum = (e) =>{
        setInsertTelNum(e.target.value)
        console.log(insertTelNum)
    }

    // 최종 넣을 이름
    const insertFinalName = insertLastName+insertFirstName;
    console.log("insertFinalName");
    console.log(insertFinalName);
    // setInsertFirstName(insertFinalName);

    const optionItems = document.getElementById("countryItems")
    const options =(e)=>{
        // console.log(optionItems.options[optionItems.selectedIndex].text);
        console.log(e.target.value)
        setInsertCountry(e.target.value)
    }

    const radio1 =(e)=>{
        // console.log(optionItems.options[optionItems.selectedIndex].text);
        console.log(e.target.value)
        setInsertGender(e.target.value)
    }

    const radio2 =(e)=>{
        // console.log(optionItems.options[optionItems.selectedIndex].text);
        console.log(e.target.value)
        setInsertGender(e.target.value)
    }

    console.log('선택된 성별')
    console.log(insertGender);

    const [data, setData] = useState('');
    const [code, setCode] = useState('');



    const onClickEmailCheck = () => {
        axios.get('http://localhost:8080/emailCheck', {
            params: {
                userId: email,
            }
        })
            .then(async (req) => {
                const {data} = req;
                setData(data);
                console.log(data)
                if (data === 1) {
                    Swal.fire({
                        icon: 'error',
                        title: '중복된 아이디입니다',
                    })
                    setEmailMessage('중복된 아이디입니다.')
                } else if (data === 0) {
                    setEmailMessage('사용가능한 아이디입니다.')

                    //아이디 중복 체크
                    axios.get('http://localhost:8080/emailCheck', {
                        params: {
                            userId: email,
                        }
                    })
                        //아이디가 중복되지 않았다면 이메일로 인증 번호 발송
                        .then((req) => {
                            console.log(req);
                            axios.get('http://localhost:8080/emailCode', {
                                params: {
                                    userId: email,
                                }
                            })
                                //인증번호 보낸 것이 성공했을 때 실행
                                .then((req) => {
                                    console.log(req);
                                    alert('인증번호를 보냈습니다.')
                                    const {data} = req;

                                    // setCode(data);
                                    console.log('인증번호는 말이다')
                                    console.log(data)
                                    // const { value: url } = await Swal.fire({
                                    //     input: 'url',
                                    //     inputLabel: 'URL address',
                                    //     inputPlaceholder: 'Enter the URL'
                                    // })
                                    //
                                    // if (url) {
                                    //     Swal.fire(`Entered URL: ${url}`)
                                    // }
                                })
                                .catch((err) => {
                                    Swal.fire({
                                        icon: 'error',
                                        title: '두번째 통신 오류',
                                    })
                                    console.log(err);
                                })
                        })
                        .catch(
                            // Swal.fire({
                            //     icon: 'error',
                            //     title: '첫번째 통신 오류',
                            // })
                        )

                }
            })
    }
                    // 회원가입하기
                    const onClickJoin = () => {
                        axios({
                            url: 'http://localhost:8080/insertJoin',
                            method: 'post',
                            data: {
                                userId: email,
                                pwd: password,
                                tel: insertTelNum,
                                gender: insertGender,
                                name: insertFinalName,
                                nation: insertCountry,
                                birthDt: insertBirth,
                                profileImg: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
                            }
                        })
                            .then(function (response) {
                                console.log(response)
                                Swal.fire({
                                    icon: 'success',
                                    title: '가입이 완료되었습니다.',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(() => {
                                    setShow(false);
                                })

                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }

                    // const onClickemilCode = () => {
                    //     axios.get('http://localhost:8080/emailCode', {
                    //         params: {
                    //             userId: email,
                    //         }
                    //     })
                    //         .then((req) => {
                    //             alert('인증번호발송')
                    //             // const {data} = req;
                    //             // setCode(data);
                    //             // console.log(code)
                    //             // alert(code);
                    //
                    //             // let writeCode= window.prompt(email+"로 인증코드를 보냈습니다. 인증코드를 입력해주세요");
                    //             // // {writeCode}
                    //             // if(code===writeCode){
                    //             //     alert('인증번호가 일치합니다ㅣ')
                    //             // } else{
                    //             //     alert('불일치합니다.')
                    //             // }
                    //         })
                    //         .catch((err) => {
                    //             console.log(err)
                    //         })
                    // }


                    return (
                        <>
                            <DropdownItem href={"#"} onClick={() => setShow(true)}>
                                회원가입
                            </DropdownItem>
                            {/*<img src='../public/img/user.png'*/}

                            <Modal
                                size={"lg"}
                                show={show}
                                onHide={() => setShow(false)}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >

                                <ModalHeader className={'d-flex'} closeButton={true}>
                                    <ModalTitle className={'flex-grow-1 text-center'}>회원가입</ModalTitle>
                                </ModalHeader>

                                <ModalBody>
                                    <div className={'container'}>
                                        <div className={'row justify-content-start'}>
                                            <div className={'row mx-auto'}>
                                                <div className={"col-10 mx-auto mt-2"}>
                                                    <InputGroup size="lg">
                                                        <FloatingLabel controlId="firstName" label="이름(예 : 길동)">
                                                            <Form.Control type="firstName" placeholder="이름(예 : 길동)"
                                                                          onChange={onChangeinputFirstName}/>
                                                        </FloatingLabel>
                                                        <FloatingLabel controlId="secondName" label="성(예 : 홍)">
                                                            <Form.Control type="firstName" placeholder="성(예 : 홍)"
                                                                          onChange={onChangeInputLastName}/>
                                                        </FloatingLabel>
                                                    </InputGroup>
                                                    <p style={{color: "gray", fontSize: "15px"}}>정부 발급 신분증에 표시된 이름과
                                                        일치하는지 확인하세요.</p>
                                                    <FloatingLabel controlId="birth" label="생년월일">
                                                        <Form.Control type="text" placeholder="생년월일 8자리"
                                                                      onChange={onChangeBirth}/>
                                                    </FloatingLabel>
                                                    <p style={{color: "gray", fontSize: "15px"}}>{<span
                                                        className={`message ${isBirth ? 'success' : 'error'}`}>{birthMessage}</span>}</p>

                                                    <br/>
                                                    {/*중복확인*/}
                                                    <div className={'row'}>
                                                        <div className={'col-9'}>
                                                            <FloatingLabel controlId="email" label="이메일">
                                                                <Form.Control type="email" typeTitle="email"
                                                                              placeholder="이메일"
                                                                              onChange={onChangeEmail}/>
                                                            </FloatingLabel>
                                                        </div>
                                                        <div className={'col-3 my-auto'}>
                                                            <button className={'btn btn-primary'}
                                                                    onClick={onClickEmailCheck}>인증하기
                                                            </button>
                                                        </div>
                                                    </div>
                                                    
                                                    {/*인증코드*/}
                                                    <div className={'row mt-4'}>
                                                        <div className={'col-9'}>
                                                            
                                                            <FloatingLabel controlId="email" label="인증코드">
                                                                <Form.Control type="email" typeTitle="email"
                                                                              placeholder="인증코드"
                                                                              onChange={onChangeEmail}/>
                                                            </FloatingLabel>
                                                        </div>
                                                        <div className={'col-3 my-auto'}>
                                                            <button className={'btn btn-primary'}
                                                                    onClick={onClickEmailCheck}>인증하기
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p style={{color: "gray", fontSize: "15px"}}>{email.length > 0 &&
                                                        <span
                                                            className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}</p>

                                                    <br/>
                                                    <FloatingLabel controlId="pwd" label="비밀번호">
                                                        <Form.Control type="password" placeholder="비밀번호"
                                                                      onChange={onChangePassword}/>
                                                    </FloatingLabel>
                                                    <p style={{color: "gray", fontSize: "15px"}}>{password.length > 0 &&
                                                        <span
                                                            className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>}</p>
                                                    <FloatingLabel controlId="passwordCheck" label="비밀번호확인">
                                                        <Form.Control type="password" placeholder="비밀번호확인"
                                                                      onChange={onChangePasswordConfirm}/>
                                                    </FloatingLabel>
                                                    <p style={{
                                                        color: "gray",
                                                        fontSize: "15px"
                                                    }}>{passwordConfirm.length > 0 && <span
                                                        className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>}</p>

                                                    <br/>
                                                    <FloatingLabel controlId="passwordCheck" label="전화번호">
                                                        <Form.Control type="text" placeholder="전화번호"
                                                                      onChange={onChangeTelNum}/>
                                                    </FloatingLabel>
                                                    <div>
                                                        <p className={'mt-4'} style={{fontSize: "20px"}}>국가 선택</p>
                                                        <select id="countryItems" data-testid="login-signup-countrycode"
                                                                className="countrycode" onChange={options}>
                                                            <option value="콩고">콩고</option>
                                                            <option value="콩고 민주 공화국">콩고 민주 공화국</option>
                                                            <option value="홍콩">홍콩</option>
                                                            <option value="코소보">코소보</option>
                                                            <option value="마카오">마카오</option>
                                                            <option value="북마케도니아">북마케도니아</option>
                                                            <option value="대만">대만</option>
                                                            <option value="가나">가나</option>
                                                            <option value="가봉">가봉</option>
                                                            <option value="가이아나">가이아나</option>
                                                            <option value="감비아">감비아</option>
                                                            <option value="건지">건지</option>
                                                            <option value="과들루프">과들루프</option>
                                                            <option value="과테말라">과테말라</option>
                                                            <option value="괌">괌</option>
                                                            <option value="그레나다">그레나다</option>
                                                            <option value="그리스">그리스</option>
                                                            <option value="그린란드">그린란드</option>
                                                            <option value="기니">기니</option>
                                                            <option value="기니비사우">기니비사우</option>
                                                            <option value="나미비아">나미비아</option>
                                                            <option value="나우루">나우루</option>
                                                            <option value="나이지리아">나이지리아</option>
                                                            <option value="남수단">남수단</option>
                                                            <option value="남아프리카">남아프리카</option>
                                                            <option value="네덜란드">네덜란드</option>
                                                            <option value="네덜란드령카리브">네덜란드령 카리브</option>
                                                            <option value="네팔">네팔</option>
                                                            <option value="노르웨이">노르웨이</option>
                                                            <option value="노퍽섬">노퍽섬</option>
                                                            <option value="뉴질랜드">뉴질랜드</option>
                                                            <option value="뉴칼레도니아">뉴칼레도니아</option>
                                                            <option value="니우에">니우에</option>
                                                            <option value="니제르">니제르</option>
                                                            <option value="니카라과">니카라과</option>
                                                            <option value="덴마크">덴마크</option>
                                                            <option value="도미니카">도미니카</option>
                                                            <option value="도미니카 공화국">도미니카 공화국</option>
                                                            <option value="독일">독일</option>
                                                            <option value="동티모르">동티모르</option>
                                                            <option value="라오스">라오스</option>
                                                            <option value="라이베리아">라이베리아</option>
                                                            <option value="라트비아">라트비아</option>
                                                            <option value="러시아">러시아</option>
                                                            <option value="레바논">레바논</option>
                                                            <option value="레소토">레소토</option>
                                                            <option value="루마니아">루마니아</option>
                                                            <option value="룩셈부르크">룩셈부르크</option>
                                                            <option value="르완다">르완다</option>
                                                            <option value="리비아">리비아</option>
                                                            <option value="리유니온">리유니온</option>
                                                            <option value="리투아니아">리투아니아</option>
                                                            <option value="리히텐슈타인">리히텐슈타인</option>
                                                            <option value="마다가스카르">마다가스카르</option>
                                                            <option value="마르티니크">마르티니크</option>
                                                            <option value="마셜 제도">마셜 제도</option>
                                                            <option value="마요트">마요트</option>
                                                            <option value="말라위">말라위</option>
                                                            <option value="말레이시아">말레이시아</option>
                                                            <option value="말리">말리</option>
                                                            <option value="맨 섬">맨 섬</option>
                                                            <option value="멕시코">멕시코</option>
                                                            <option value="모나코">모나코</option>
                                                            <option value="모로코">모로코</option>
                                                            <option value="모리셔스">모리셔스</option>
                                                            <option value="모리타니">모리타니</option>
                                                            <option value="모잠비크">모잠비크</option>
                                                            <option value="몬테네그로">몬테네그로</option>
                                                            <option value="몬트세라트">몬트세라트</option>
                                                            <option value="몰도바">몰도바</option>
                                                            <option value="몰디브">몰디브</option>
                                                            <option value="몰타">몰타</option>
                                                            <option value="몽골">몽골</option>
                                                            <option value="미국">미국</option>
                                                            <option value="미국령 버진아일랜드">미국령 버진아일랜드</option>
                                                            <option value="미얀마">미얀마</option>
                                                            <option value="미크로네시아">미크로네시아</option>
                                                            <option value="바누아투">바누아투</option>
                                                            <option value="바레인">바레인</option>
                                                            <option value="바베이도스">바베이도스</option>
                                                            <option value="바티칸 시국">바티칸 시국</option>
                                                            <option value="바하마">바하마</option>
                                                            <option value="방글라데시">방글라데시</option>
                                                            <option value="버뮤다">버뮤다</option>
                                                            <option value="베냉">베냉</option>
                                                            <option value="베네수엘라">베네수엘라</option>
                                                            <option value="베트남">베트남</option>
                                                            <option value="벨기에">벨기에</option>
                                                            <option value="벨라루스">벨라루스</option>
                                                            <option value="벨리즈">벨리즈</option>
                                                            <option value="보스니아 헤르체고비나">보스니아 헤르체고비나</option>
                                                            <option value="보츠와나">보츠와나</option>
                                                            <option value="볼리비아">볼리비아</option>
                                                            <option value="부룬디">부룬디</option>
                                                            <option value="부르키나파소">부르키나파소</option>
                                                            <option value="부탄">부탄</option>
                                                            <option value="북마리아나제도">북마리아나제도</option>
                                                            <option value="불가리아">불가리아</option>
                                                            <option value="브라질">브라질</option>
                                                            <option value="브루나이">브루나이</option>
                                                            <option value="사모아">사모아</option>
                                                            <option value="사우디아라비아">사우디아라비아</option>
                                                            <option value="사우스조지아 사우스샌드위치 제도">사우스조지아 사우스샌드위치 제도</option>
                                                            <option value="산마리노">산마리노</option>
                                                            <option value="상투메 프린시페">상투메 프린시페</option>
                                                            <option value="생마르탱">생마르탱</option>
                                                            <option value="생바르텔레미">생바르텔레미</option>
                                                            <option value="생피에르 미클롱">생피에르 미클롱</option>
                                                            <option value="서사하라">서사하라</option>
                                                            <option value="세네갈">세네갈</option>
                                                            <option value="세르비아">세르비아</option>
                                                            <option value="세이셸">세이셸</option>
                                                            <option value="세인트루시아">세인트루시아</option>
                                                            <option value="세인트빈센트그레나딘">세인트빈센트그레나딘</option>
                                                            <option value="세인트키츠 네비스">세인트키츠 네비스</option>
                                                            <option value="세인트헬레나">세인트헬레나</option>
                                                            <option value="소말리아">소말리아</option>
                                                            <option value="솔로몬 제도">솔로몬 제도</option>
                                                            <option value="수단">수단</option>
                                                            <option value="수리남">수리남</option>
                                                            <option value="스리랑카">스리랑카</option>
                                                            <option value="스발바르제도-얀마웬섬">스발바르제도-얀마웬섬</option>
                                                            <option value="스웨덴">스웨덴</option>
                                                            <option value="스위스">스위스</option>
                                                            <option value="스페인">스페인</option>
                                                            <option value="슬로바키아">슬로바키아</option>
                                                            <option value="슬로베니아">슬로베니아</option>
                                                            <option value="시에라리온">시에라리온</option>
                                                            <option value="신트마르턴">신트마르턴</option>
                                                            <option value="싱가포르">싱가포르</option>
                                                            <option value="아랍에미리트">아랍에미리트</option>
                                                            <option value="아루바">아루바</option>
                                                            <option value="아르메니아">아르메니아</option>
                                                            <option value="아르헨티나">아르헨티나</option>
                                                            <option value="아메리칸 사모아">아메리칸 사모아</option>
                                                            <option value="아이슬란드">아이슬란드</option>
                                                            <option value="아이티">아이티</option>
                                                            <option value="아일랜드">아일랜드</option>
                                                            <option value="아제르바이잔">아제르바이잔</option>
                                                            <option value="아프가니스탄">아프가니스탄</option>
                                                            <option value="안도라">안도라</option>
                                                            <option value="알바니아">알바니아</option>
                                                            <option value="알제리">알제리</option>
                                                            <option value="앙골라">앙골라</option>
                                                            <option value="앤티가 바부다">앤티가 바부다</option>
                                                            <option value="앵귈라">앵귈라</option>
                                                            <option value="에리트리아">에리트리아</option>
                                                            <option value="에스와티니">에스와티니</option>
                                                            <option value="에스토니아">에스토니아</option>
                                                            <option value="에콰도르">에콰도르</option>
                                                            <option value="에티오피아">에티오피아</option>
                                                            <option value="엘살바도르">엘살바도르</option>
                                                            <option value="영국">영국</option>
                                                            <option value="영국령 버진아일랜드">영국령 버진아일랜드</option>
                                                            <option value="영국령 인도양 식민지">영국령 인도양 식민지</option>
                                                            <option value="예멘">예멘</option>
                                                            <option value="오만">오만</option>
                                                            <option value="오스트레일리아">오스트레일리아</option>
                                                            <option value="오스트리아">오스트리아</option>
                                                            <option value="온두라스">온두라스</option>
                                                            <option value="올란드 제도">올란드 제도</option>
                                                            <option value="왈리스-푸투나 제도">왈리스-푸투나 제도</option>
                                                            <option value="요르단">요르단</option>
                                                            <option value="우간다">우간다</option>
                                                            <option value="우루과이">우루과이</option>
                                                            <option value="우즈베키스탄">우즈베키스탄</option>
                                                            <option value="우크라이나">우크라이나</option>
                                                            <option value="이라크">이라크</option>
                                                            <option value="이스라엘">이스라엘</option>
                                                            <option value="이집트">이집트</option>
                                                            <option value="이탈리아">이탈리아</option>
                                                            <option value="이탈리아">이탈리아</option>
                                                            <option value="인도네시아">인도네시아</option>
                                                            <option value="일본">일본</option>
                                                            <option value="자메이카">자메이카</option>
                                                            <option value="잠비아">잠비아</option>
                                                            <option value="저지">저지</option>
                                                            <option value="적도 기니">적도 기니</option>
                                                            <option value="조지아">조지아</option>
                                                            <option value="중국">중국</option>
                                                            <option value="중앙 아프리카 공화국">중앙 아프리카 공화국</option>
                                                            <option value="지부티">지부티</option>
                                                            <option value="지브롤터">지브롤터</option>
                                                            <option value="짐바브웨">짐바브웨</option>
                                                            <option value="차드">차드</option>
                                                            <option value="체코">체코</option>
                                                            <option value="칠레">칠레</option>
                                                            <option value="카메룬">카메룬</option>
                                                            <option value="카보베르데">카보베르데</option>
                                                            <option value="카자흐스탄">카자흐스탄</option>
                                                            <option value="카타르">카타르</option>
                                                            <option value="캄보디아">캄보디아</option>
                                                            <option value="캐나다">캐나다</option>
                                                            <option value="케냐">케냐</option>
                                                            <option value="케이맨 제도">케이맨 제도</option>
                                                            <option value="코모로">코모로</option>
                                                            <option value="코스타리카">코스타리카</option>
                                                            <option value="코코스 제도">코코스 제도</option>
                                                            <option value="코트디부아르">코트디부아르</option>
                                                            <option value="콜롬비아">콜롬비아</option>
                                                            <option value="쿠바">쿠바</option>
                                                            <option value="쿠웨이트">쿠웨이트</option>
                                                            <option value="쿡 제도">쿡 제도</option>
                                                            <option value="퀴라소">퀴라소</option>
                                                            <option value="크로아티아">크로아티아</option>
                                                            <option value="크리스마스섬">크리스마스섬</option>
                                                            <option value="키르기스스탄">키르기스스탄</option>
                                                            <option value="키리바리시">키리바리시</option>
                                                            <option value="키프로스">키프로스</option>
                                                            <option value="타지키스탄">타지키스탄</option>
                                                            <option value="탄자니아">탄자니아</option>
                                                            <option value="태국">태국</option>
                                                            <option value="터크스 케이커스 제도">터크스 케이커스 제도</option>
                                                            <option value="터키">터키</option>
                                                            <option value="토고">토고</option>
                                                            <option value="토켈라우">토켈라우</option>
                                                            <option value="통가">통가</option>
                                                            <option value="투르크메니스탄">투르크메니스탄</option>
                                                            <option value="투발루">투발루</option>
                                                            <option value="튀니지">튀니지</option>
                                                            <option value="트리니다드 토바고">트리니다드 토바고</option>
                                                            <option value="파나마">파나마</option>
                                                            <option value="파라과이">파라과이</option>
                                                            <option value="파키스탄">파키스탄</option>
                                                            <option value="파푸아뉴기니">파푸아뉴기니</option>
                                                            <option value="팔라우">팔라우</option>
                                                            <option value="팔레스타인 지구">팔레스타인 지구</option>
                                                            <option value="페로 제도">페로 제도</option>
                                                            <option value="페루">페루</option>
                                                            <option value="포르투갈">포르투갈</option>
                                                            <option value="포클랜드 제도(말비나스 군도)">포클랜드 제도(말비나스 군도)</option>
                                                            <option value="폴란드">폴란드</option>
                                                            <option value="푸에르토리코">푸에르토리코</option>
                                                            <option value="프랑스">프랑스</option>
                                                            <option value="프랑스령 기아나">프랑스령 기아나</option>
                                                            <option value="프랑스령 폴리네시아">프랑스령 폴리네시아</option>
                                                            <option value="피지">피지</option>
                                                            <option value="핀란드">핀란드</option>
                                                            <option value="필리핀">필리핀</option>
                                                            <option value="핏케언 섬">핏케언 섬</option>
                                                            <option value="한국" selected>한국</option>
                                                            <option value="헝가리">헝가리</option>
                                                        </select>
                                                    </div>
                                                    <div className="row justify-content-start mt-3">
                                                        <div className="form-check col-2 ms-3 ">
                                                            <input className="form-check-input" type="radio"
                                                                   name="flexRadioDefault"
                                                                   id="male" value='M' onClick={radio1}/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioDefault1">
                                                                남성
                                                            </label>
                                                        </div>
                                                        <div className="form-check col-2">
                                                            <input className="form-check-input" type="radio"
                                                                   name="flexRadioDefault" value="F"
                                                                   id="female" onClick={radio1} checked/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioDefault2">
                                                                여성
                                                            </label>
                                                            {/*<p>선택된 성별 :{insertGender}</p>*/}
                                                        </div>
                                                    </div>

                                                    <hr/>
                                                    <br/>
                                                    <div className={'row justify-content-start'}>
                                                        <div className={'col-10 float-end'}>
                                                            <p style={{fontSize: "17px"}}>개인정보 수집 및 이용에 동의합니다.</p>
                                                            <p style={{color: "gray"}}>베어비앤비가 수집하는 개인 정보 에어비앤비 플랫폼을
                                                                이용하는 데 필요한 정보 당사자는 회원님이 베어비앤비 플랫폼을 이용할 때 회원님의 개인 정보를
                                                                수집합니다.
                                                                그렇지 않은 경우, 베어비앤비는 요청하신 서비스를 회원님께 제공하지 못할 수 있습니다.
                                                                이러한 정보에는 다음이 포함됩니다.</p>
                                                        </div>
                                                        <div className={'col-2'} style={{zoom: 2}}>
                                                            <input type={'checkbox'}/>
                                                        </div>
                                                    </div>
                                                    <div className={'row justify-content-start'}>
                                                        <div className={'col-10 float-end'}>
                                                            <p style={{fontSize: "17px"}}>마케팅 이메일 수신을 원합니다(선택).</p>
                                                            <p style={{color: "gray"}}>베어비앤비 회원 전용 할인, 추천 여행 정보, 마케팅
                                                                이메일, 푸시 알림을
                                                                보내드립니다. 계정 설정 또는 마케팅 알림에서 언제든지 수신을 거부할 수 있습니다.</p>
                                                        </div>
                                                        <div className={'col-2'} style={{zoom: 2}}>
                                                            <input type={'checkbox'}/>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className={'col fw-bold'}>
                                                        동의 및 계속하기를 선택하여 베어비앤비 서비스 약관, 결제 서비스 약관, 위치기반서비스 이용약관,
                                                        차별 금지 정책, 개인정보 처리방침에 동의합니다.
                                                    </div>
                                                    <button className={'btn btn-danger col-12 mt-5 mb-5'}
                                                            onClick={onClickJoin}>회원가입완료
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ModalBody>
                            </Modal>
                        </>
                    );
                }


export default Join;