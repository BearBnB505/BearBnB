import {motion} from "framer-motion";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import axios from "axios";

// function KeepingItem({idx, imageUrl, lodging_num,lodging_name, addr,
//                        Avg,count}){
function KeepingItem({idx, lodging_num,lodging_name, addr,
                       Avg,count}){


  const [img, setImg]= useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/imgList/', {params:{lodgingNum: lodging_num}})
        .then((req) => {
          const {data} = req;
            setImg(data[0].photo);
          // console.log("이미지주소"+img);
          console.log("이미지 주소:"+img);
        })
        .catch((err) => {
          console.log("통신 오류");
          console.log(err);
        })
  }, []);


  const linkBtn=()=>{
    window.location.href='http://localhost:3000/lodgingDetail/'+idx
  }

  return (

    <div className={"col-sm-6 col-md-6 col-lg-4 mb-2"} onClick={linkBtn}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
            <Card className={"shadow-sm rounded-3 p-1"} >
              <div style={styles.imgDiv}>
                <img style={styles.img} src={img} alt=""/>
              </div>
              {/*/!*<Card.Img variant="top" src="holder.js/100px180"/>*!/ 이미지 <br/><br/><br/><br/>*/}
              <Card.Text className={"p-3"}>
                <div className={"mb-0"}>
                                <span className={"me-2"}>
                                    <strong>{lodging_name}</strong>
                                    </span>
                  {/*<span className={"blueColor"}><FontAwesomeIcon icon={faStar} size="1x"/> {((Number(clean_grade) + Number(accuracy_grade) + Number(communication_grade) + Number(location_grade) + Number(check_in_grade) + Number(cost_grade))/6).toFixed(1)} ({clean_grade})</span>*/}
                  <span className={"blueColor"}><FontAwesomeIcon icon={faStar} size="1x"/> {Avg} ({count})</span>
                </div>
                <p>{addr}</p>

              </Card.Text>
            </Card>
          </motion.div>
        </li>
      </ul>
    </div>

  )
}

export default KeepingItem;


const styles = {
  ul: {
    padding: 0,
  },
  li: {
    listStyleType: "none",
  },
  imgDiv: {
    width: "100%",
    height: "250px",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
  },
}
