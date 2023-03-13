import React, {useEffect, useState} from "react";
import axios from "axios";
import ReviewItem from "./ReviewItem";
import ReviewPagenation from "./ReviewPagenation";


function ReviewList(props) {
    // 리뷰 DB 가져와서 리스트 형식으로 담길 배열
    const [data, setData] = useState([]);
    // 페이지당 게시물 수
    const [limit, setLimit] = useState(5);
    // 현재 페이지 번호(page)
    const [page, setPage] = useState(1);
    // 첫 게시물의 위치(offset)
    const offset = (page - 1) * limit;

    const [isLoaded, setIsLoaded] = useState(false);
    const check = sessionStorage.getItem('check');


    const reviewList = () => {
        setTimeout(()=>{
            axios.get('http://localhost:8080/ReviewList/', {params: {userId : props.userId}})
                .then((req) => {
                    const {data} = req;
                    setData(data);
                })
                .catch((err) => {
                    console.log("통신 오류");
                    console.log(err);
                })
        },300)
    }

    useEffect(()=>{
        if(check == 'done'){
            reviewList();
            return () => clearTimeout(reviewList());
        }
    },[check]);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsLoaded(true);
        },1800);
        return () => clearTimeout(timer);
    }, []);

    return isLoaded ? (
        <div>
            <div className={"row"}>
                <div>
                    {data.slice(offset, offset + limit).map((item) => {
                        return <ReviewItem idx={item.idx} user_id={item.userId}
                                           comment={item.comment}
                                           review_create_dt={item.reviewCreateDt}/>
                    })
                    }
                </div>
            </div>
            <ReviewPagenation
                total={data.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </div>
    ) : <></>
}

export default ReviewList;