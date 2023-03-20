import {motion} from "framer-motion";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

// function KeepingItem({idx, imageUrl, lodging_num,lodging_name, addr,
//                        Avg,count}){
function KeepingItem({idx, lodging_num,lodging_name, addr, Avg, count, lat, lng}){


  const [img, setImg]= useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/imgList/', {params:{lodgingNum: lodging_num}})
        .then((req) => {
          const {data} = req;
          setImg(data[0].photo);
          // console.log("이미지주소"+img);
        })
        .catch((err) => {
          console.log("통신 오류");
          console.log(err);
        })
  }, []);


  return (
      <Link to={`/lodgingDetail/${idx}`} key={idx} state={{lat: `${lat}`, lng: `${lng}`}}>
        <div className={"col-sm-6 col-md-6 col-lg-4 mb-2"}>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 1}}>
                <Card className={"shadow-sm rounded-3 p-1"} >
                  <div style={styles.imgDiv}>
                    <img style={styles.img} src={img} alt=""/>
                  </div>
                  <Card.Text className={"p-3"}>
                    <div className={"mb-0"}>
                                <span className={"me-2"}>
                                    <strong>{lodging_name}</strong>
                                    </span>
                      <span className={"blueColor"}><FontAwesomeIcon icon={faStar} size="1x"/> {Avg} ({count})</span>
                    </div>
                    <p>{addr}</p>

                  </Card.Text>
                </Card>
              </motion.div>
            </li>
          </ul>
        </div>
      </Link>
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
