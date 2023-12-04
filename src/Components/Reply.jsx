import { useState } from "react";

import "./Styles/Comment.scss";

import AddComment from "./AddComment";
import DeleteModal from "./DeleteModal";

import { CommentHeader } from "./commentParts";

const Reply = ({
  commentData,
  addNewReply,
  deleteComment,
  setDeleteModalState,
}) => {
  const [replying, setReplying] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // adding reply
  const addReply = (newReply) => {
    addNewReply(newReply);
    setReplying(false);
  };

  const commentContent = () => {
    const text = commentData.content.trim().split(" ");
    const firstWord = text.shift().split(",");

    return  (
      <div className="comment-content">
        <span className="replyingTo">{firstWord}</span>
        {text.join(" ")}
      </div>
    ) 
  };

 
  // delete comment
  const deleteReply = () => {
    deleteComment(commentData.id, "reply");
    setDeleting(false);
  };

  return (
    <div
      className={`comment-container ${
        commentData.replies[0] !== undefined ? "gap" : ""
      }`}
    >
      <div className="comment">
       
        <div className="comment--body">
          <CommentHeader
            commentData={commentData}
            setReplying={setReplying}
            setDeleting={setDeleting}
            setDeleteModalState={setDeleteModalState}
         
          />
          {commentContent()}
        </div>
      </div>

      {replying && (
        <AddComment
          buttonValue={"reply"}
          addComments={addReply}
          replyingTo={commentData.username}
        />
      )}
      {commentData.replies.map((reply) => (
        <Reply key={reply.id} commentData={reply} addReply={addReply} />
      ))}

      {deleting && (
        <DeleteModal
          setDeleting={setDeleting}
          deleteComment={deleteReply}
          setDeleteModalState={setDeleteModalState}
        />
      )}
    </div>
  );
};

export default Reply;
