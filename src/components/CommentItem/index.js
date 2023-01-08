import { formatDistanceToNow } from "date-fns";
import "./index.css";

const CommentItem = (props) => {
  const { eachComment, ondeleteCommentItem, onLikeToggleClick } = props;
  const { id, inputText, inputTextArea, postTime, like, backGroundColor } =
    eachComment;

  const firstLetter = inputText.slice(0, 1).toUpperCase();
  const changingTime = formatDistanceToNow(postTime);

  const likeImage =
    "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";
  const likedImage =
    "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png";

  const likeImagesToggle = like ? likedImage : likeImage;

  const onDeleteComment = () => {
    ondeleteCommentItem(id);
  };

  const onLikeClick = () => {
    onLikeToggleClick(id);
  };

  return (
    <li className="list_container">
      <div className="details">
        <div className={`initial_container ${backGroundColor}`}>
          <p className="letter">{firstLetter}</p>
        </div>
        <div className="name_time_details">
          <h1 className="user_name">{inputText}</h1>
          <p className="user_time">{changingTime}</p>
        </div>
      </div>
      <p className="user_comment">{inputTextArea}</p>

      <div className="likes_container">
        <div className="likes">
          <button type="button" className="button" onClick={onLikeClick}>
            <img src={likeImagesToggle} alt="ajay1" className="like" />
          </button>

          <p>Like</p>
        </div>
        <button type="button" className="button" onClick={onDeleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
