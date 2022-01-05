import "./Comment.css";

function Comment({ content, id, onDelete }) {
  return (
    <div className="post-comment-item">
      <div className="post-comment-item-content">
        <p className="post-comment-item-name">Person</p>
        <p className="post-comment-item-text">{content}</p>
      </div>
      <div className="post-comment-item-option">
        <div className="post-comment-item-option-list">
          <p className="post-comment-item-option-item">Chỉnh sửa</p>
          <p
            className="post-comment-item-option-item"
            // onClick={(e) => {
            //   let cmt = document.querySelector(".post-comment-item-content");
            //   document.querySelector(".post-comment-item").removeChild(cmt);
            // }}
            onClick={(e) => {
              e.target.parentNode.parentNode.parentNode.parentNode.removeChild(
                e.target.parentNode.parentNode.parentNode
              );
            }}
          >
            Xóa
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
