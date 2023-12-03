import { FaReply } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const CommentBtn = ({
  commentData,
  replying,
  setReplying,
  setDeleting,
  setDeleteModalState,
}) => {
  const showAddComment = () => {
    setReplying(!replying);
  };

  // delete comment
  const showDeleteModal = () => {
    setDeleting(true);
    setDeleteModalState(true);
  };

  return (
    <div className="comment--btn">
      <button
        className={`reply-btn ${
          !commentData.currentUser ? "" : "display--none"
        }`}
        onClick={showAddComment}
      >
        <FaReply /> Reply
      </button>
      <button
        className={`delete-btn ${
          commentData.currentUser ? "" : "display--none"
        }`}
        onClick={showDeleteModal}
      >
        <MdDelete /> Delete
      </button>
    
    </div>
  );
};

export default CommentBtn;
