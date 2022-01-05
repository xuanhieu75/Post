import "./PostCreate.css";
import PostForm from "../PostForm";
import { useState } from "react";
import PostList from "../PostList";

function PostCreate() {
  const [show, setShow] = useState(false);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [contentForm, setContentForm] = useState({
    heading: "Bài viết",
    button: "Đăng"
  });

  function handleClickAddPost() {
    setShow(true);
  }

  function handleDeletePost(index) {
    posts.splice(index, 1);
    setPosts([...posts]);
  }

  return (
    <>
      <div className="post-create">
        <div className="post-body">
          <p onClick={handleClickAddPost} className="post-body-btn">
            Bạn đang nghĩ gì?
          </p>
        </div>
      </div>
      <PostForm
        post={post}
        setPost={setPost}
        show={show}
        setShow={setShow}
        setPosts={setPosts}
        posts={posts}
        contentForm={contentForm}
        setContentForm={setContentForm}
      ></PostForm>
      <PostList
        contentForm={contentForm}
        setContentForm={setContentForm}
        show={show}
        setShow={setShow}
        posts={posts}
        onDeletePost={handleDeletePost}
      ></PostList>
    </>
  );
}

export default PostCreate;
