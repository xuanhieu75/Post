import "./PostItem.css";
import Button from "../Button";
import Comment from "../Comment";
import { useState } from "react";

function PostItem({
  content,
  show,
  setShow,
  contentForm,
  setContentForm,
  onDeletePost
}) {
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState("");

  function handleUpdatePost() {
    setShow(true);
    setContentForm({ heading: "Chỉnh sửa bài viết", button: "Đăng" });
  }

  return (
    <div className="post-item">
      <div className="post-item-heading">
        <div className="post-item-heading-left">
          <div className="post-item-heading-info">
            <p className="post-item-heading-name">Somebody</p>
          </div>
        </div>
        <div className="post-item-heading-right">
          <div className="post-item-heading-right-list">
            <p
              onClick={handleUpdatePost}
              className="post-item-heading-right-item"
            >
              Chỉnh sửa
            </p>
            <p className="post-item-heading-right-item" onClick={onDeletePost}>
              Xóa
            </p>
          </div>
        </div>
      </div>
      <div className="post-item-content">{content}</div>
      <div className="post-item-comment">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Viết bình luận..."
        />
        <Button
          comment={comment}
          setComment={setComment}
          setComments={setComments}
          info
          borderRadiusRight
          text="Bình luận"
        ></Button>
      </div>
      <div className="post-comment-list">
        {comments.map((comment, index) => (
          <Comment key={index} content={comment} numberOrder={index}></Comment>
        ))}
      </div>
    </div>
  );
}

export default PostItem;
