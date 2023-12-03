
import CommentBtn from "./CommentBtn";

const CommentHeader = ({
  commentData,
  replying,
  setReplying,
  setDeleting,
  setDeleteModalState,
}) => {


  return (
    <div className="comment--header">
      <div className={`profile-pic ${commentData.username}`}></div>
      <div className="username">{commentData.username}</div>
      {commentData.currentUser ? <div className="you-tag">you</div> : ""}
   
      <CommentBtn
        commentData={commentData}
        replying={replying}
        setReplying={setReplying}
        setDeleting={setDeleting}
        setDeleteModalState={setDeleteModalState}
      />
    </div>
  );
};

export default CommentHeader;
