import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Join(){
    return (
        <div className={'container'}>
            <div className={'row justify-content-start'}>

                    <div className = {'col-1'}>
                        <img src='/joinImg/leftleftArrow.png' style={{width :"20px"}}/>
                    </div>
                    <div className={"col-6"}>
                        <p style={{fontSize:"25px", fontWeight:"bold"}}>회원가입완료하기</p>
                    </div>
                
            </div>
        </div>
    );
}

export default Join;

const styles = {
    container: {
        width:600,
    }
}
