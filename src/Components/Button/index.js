import "./Button.css";

function Button({
  text,
  primary = false,
  info = false,
  danger = false,
  show = false,
  borderRadiusRight = false,
  comment,
  post,
  setComment = () => {},
  setShow = () => {},
  setComments = () => {},
  setPosts = () => {},
  setPost = () => {},
}) {
  return (
    <div
      onClick={() => {
        setShow(false);
        setComment("");
        setComments((prev) => [...prev, comment]);
        setPosts((prev) => {
          setShow(false);
          setPost("");
          return [...prev, post];
        });
      }}
      className={`button ${primary && "primary"} ${danger && "danger"} ${
        info && "info"
      } ${borderRadiusRight && "borderRadiusRight"}`}
    >
      {text}
    </div>
  );
}

export default Button;
