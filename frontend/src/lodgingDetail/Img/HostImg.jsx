import React, {useState} from "react";
import {Button} from "react-bootstrap";
import '../lodgingDetail.css';
import HostImgModalDetail from "./HostImgModalDetail";

function HostImg({photo}) {
    const [modal, setModal] = useState(false);
    console.log('여기서 잘 전달되었는지 테스트')
    //이렇게하면 사진 이미지가 나온다.
    // console.log({photo}.photo.data[0].photo)

    const imageList = {photo}.photo.data;
    console.log(imageList);

    // const photoList = {photo}
    // console.log('photoList')
    // console.log(photoList)
    // console.log(photoList.photo.data[0].photo);





    return (
        <>
            <div className={'container'}>
                <div className={'row'}>
                <div className={'col'}>
                    <img src={{photo}.photo.data[0].photo} className={'img1'}/>
                </div>
                    <div className={'col'}>
                    <img src={{photo}.photo.data[1].photo} className={'img2'}/>
                    <img src={{photo}.photo.data[2].photo} className={'img3'}/>
                    </div>
                    <div className={'col'}>
                    <img src={{photo}.photo.data[3].photo} className={'img4'}/>
                    <img src={{photo}.photo.data[4].photo} className={'img5'}/>
                    </div>

                </div>

                {/*<ul className={"ps-1 d-flex flex-wrap"}>*/}
                {/*{*/}
                {/*    imageList.map((item) => {*/}
                {/*        return (*/}
                {/*            <div className={"container"}>*/}
                {/*                <div className={'row'}>*/}
                {/*                    <div className={'col'}>*/}
                {/*                        <img src={item.photo}/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
                {/*</ul>*/}
            {/*</div>*/}
            {/*<div className={'containerGrid'}>*/}
            {/*<HostImgItem photo={photo}/>*/}
            <Button className={'HouseImgBtn'} variant="dark"
                    onClick={() => setModal(true)}>
                사진 모두보기</Button>
            {/*</div>*/}

            {/*<HostImgModalDetail photo={photo}*/}
            {/*                    show={modal} onHide={()=>setModal(false)} />*/}

            <hr/>
            </div>
        </>
    )
}

// function HostImgItem(props) {
//
//     return (
//         <>
//             {
//                 props.photo.map((photo) => {
//                     return (
//                         <div className={"container"}>
//                             <div>
//                                 <img src={photo.photo} style={{borderRadius:"10px", height:"180px"}}/>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//             {/*/!*<img className={'img1'} src="/hostImg/1.png" alt="hostHouse"/>*!/*/}
//             {/*/!*<img className={'img2'} src="/hostImg/2.png" alt="hostHouse"/>*!/*/}
//             {/*<img className={'img3'} src="/hostImg/3.png" alt="hostHouse"/>*/}
//             {/*<img className={'img4'} src="/hostImg/4.png" alt="hostHouse"/>*/}
//             {/*<img className={'img5'} src="/hostImg/5.png" alt="hostHouse"/>*/}
//
//         </>
//     )
//
// }
//
//
export default HostImg;