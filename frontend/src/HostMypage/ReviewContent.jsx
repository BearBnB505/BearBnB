import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import axios from "axios";
import MainContents from "../Main/MainContents";
import {useLocation} from "react-router";
// 리뷰 상세보기 페이지
function ReviewContent() {

  const [data, setData] = useState([]);
   const location = useLocation();
   const idx = location.state;
   console.log(idx);

  useEffect(() => {
    axios.get('http://localhost:8080/reviewListContent/',{params:{idx:idx}})
      .then((req) => {
        const {data} = req;
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("통신 오류");
        console.log(err);
      })
  }, []);

  return (


    data.map((item) => {
      return (
        <div style={styles.frame}>
          <ul className={"list-group mb-4"} style={styles.ul}>
            {/*<ul className={"list-group mb-4"} style={styles.ul} >*/}
            <li className={"list-group-item p-4"} style={styles.li}>
              <div>

                <span className={"fs-5 fw-bold me-1"}>{item.userId}</span>
                <span className="me-2">
            <FontAwesomeIcon icon={faStar} size="1x"/> 4.97/5
          </span>
                <small className={"text-secondary"}>{item.reviewCreateDt}</small>
              </div>
              <span>
          {item.comment}
        </span>
            </li>
          </ul>
        </div>
      )
    })


  );

}

export default ReviewContent;


const styles = {
  ul: {
    border: "none",
    display: "block",
    listStyleType: "disc",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: 0,
  }, li: {},

  frame: {
    display: "grid",
    gridTemplateColumns: 1300,
    justifyContent: "Center"
  },

}