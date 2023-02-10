import React, {useContext} from "react";
import {Modal} from "react-bootstrap";
import {motion} from "framer-motion";
import Anima from "./animaData";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import PhotoContext from "../Context/PhotoContext";

function HostImgModalDetail(props) {
    const photo = useContext(PhotoContext);
    const image = [
        "/hostImg/1.png",
        "/hostImg/2.png",
        "/hostImg/3.png",
        "/hostImg/4.png",
        "/hostImg/5.png",
    ]

    return (
        <Modal
            {...props}
            size="fullscreen"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <motion.div
                variants={Anima}
                initial="hidden"
                animate="visible"
                exit="exit">
                <div className={"container"} style={{width: 900}}>
                    <Modal.Header closeButton>
                        <Modal.Title>전체 사진보기</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}>
                            <Masonry gutter="10px">
                                {image.map((item, i) => (
                                    <img
                                        key={i}
                                        src={item}
                                        style={{width: "100%", display: "block"}}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Modal.Body>
                </div>

            </motion.div>
        </Modal>
    )
}

export default HostImgModalDetail;
