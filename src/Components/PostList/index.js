import PostItem from "../PostItem";
import "./PostList.css";

function PostList({
  contentForm,
  setContentForm,
  posts,
  show,
  setShow,
  onDeletePost
}) {
  return (
    <div className="post-list">
      <p className="post-list-heading">News Feed</p>
      {posts.map((post, index) => (
        <PostItem
          contentForm={contentForm}
          setContentForm={setContentForm}
          show={show}
          setShow={setShow}
          key={index}
          content={post}
          onDeletePost={onDeletePost}
        ></PostItem>
      ))}
    </div>
  );
}

export default PostList;
