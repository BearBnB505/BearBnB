
import styled from 'styled-components';
import { useState } from 'react';

function LodgingProgressbarButton() {

    const [count, setCount] = useState(0);

    function AddCount(){
        if (count === 10){
            setCount(0);
        }
        else{
            setCount(count + 1);
        }
    }

    function MinusCount(){
        if(count !== 0){
            setCount(count -1);
        }
    }

    return (
        <div>
            <Container >
                {/*%로 부모넓이의 1/10 씩 넓어짐*/}
                <Progress width={(count/10)*100 + "%"}/>
            </Container>

        </div>
    );
}

export default LodgingProgressbarButton;

const Container = styled.div`
  margin: 50px auto;
  background-color: #eee;
  width: 100%;
  height: 8px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const Progress = styled.div`
  background-color: black;
  width: ${props => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

