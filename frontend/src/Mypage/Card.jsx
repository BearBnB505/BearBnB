import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function Card(props) {
    return (
            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 1}} className={"card shadow-sm rounded p-1"}>
                <div className={"card-body text-start"}>
                    <div className={""}><FontAwesomeIcon icon={props.icon} size="2x" /></div>
                    <div style={styles.title} className={"card-title mt-4"}>{props.title}</div>
                    <div style={styles.content} className={"card-text"}>{props.content}</div>
                </div>
            </motion.div>
    )
}

export default Card;

const styles = {

    title: {
        fontWeight : "bold",
        fontSize: 16,
    },
    content: {
        // fontWeight : "lighter",
        fontSize: 14,
    },

}