import React from "react";
import CommentAverage from "./CommentAverage";
import './Comment.css'
import Average from "./Average";

const CommentPage=()=>{
  return (
    <div>
      <Average/>
      <CommentAverage/>
    </div>
  )
}

export default CommentPage;