import "./PostForm.css";
import Button from "../Button";

function PostForm({
  show,
  setShow,
  post,
  setPost,
  setPosts,
  contentForm,
  setContentForm
}) {
  function handleClosePost() {
    setShow(false);
  }

  return (
    <div className={`post-form ${show && "is-show"}`}>
      <div className="post-form-content">
        <div className="post-form-heading">
          {contentForm.heading}
          <span className="close" onClick={handleClosePost}>
            Close
          </span>
        </div>

        <div className="post-form-input">
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Bạn đang nghĩ gì?"
          ></textarea>
        </div>
        <div className="post-form-footer">
          <Button
            setShow={setShow}
            setPosts={setPosts}
            post={post}
            setPost={setPost}
            primary
            text={contentForm.button}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
