import { FaReply } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

//reply, delete buttonlari
const CommentBtn = ({
  commentData,
  replying,
  setReplying,
  setDeleting,
  setDeleteModalState,
}) => {
  
  // reply comment
  const replycomment = () => {
    setReplying(!replying);
  };

  // delete comment
  const deletecomment = () => {
    setDeleting(true);
    setDeleteModalState(true);
  };

  return (
    <div className="comment--btn">
      <button
        className={`reply-btn ${
          !commentData.currentUser ? "" : "display--none"
        }`}
        onClick={replycomment}
      >
        <FaReply /> Reply
      </button>
      <button
        className={`delete-btn ${
          commentData.currentUser ? "" : "display--none"
        }`}
        onClick={deletecomment}
      >
        <MdDelete /> Delete
      </button>
    </div>
  );
};

export default CommentBtn;
