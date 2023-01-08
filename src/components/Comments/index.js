import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import CommentItem from "../CommentItem/index";

import "./index.css";

const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

class Comments extends Component {
  state = {
    commentsList: [],
    userInput: "",
    userComment: "",
  };

  onChangeInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  onChangeComment = (event) => {
    this.setState({
      userComment: event.target.value,
    });
  };

  onAddComment = (event) => {
    event.preventDefault();
    const { userInput, userComment } = this.state;

    const initialClassBackGroundColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1
        )
      ];

    console.log(initialClassBackGroundColor);

    const newComment = {
      id: uuidv4(),
      inputText: userInput,
      inputTextArea: userComment,
      postTime: new Date(),
      like: false,
      backGroundColor: initialClassBackGroundColor,
    };

    this.setState((prevSate) => ({
      commentsList: [...prevSate.commentsList, newComment],
      userInput: "",
      userComment: "",
    }));
  };

  ondeleteCommentItem = (id) => {
    const { commentsList } = this.state;

    this.setState({
      commentsList: commentsList.filter((each) => each.id !== id),
    });
  };

  onLikeToggleClick = (id) => {
    this.setState((prevSate) => ({
      commentsList: prevSate.commentsList.map((each) => {
        if (each.id === id) {
          return { ...each, like: !each.like };
        }
        return each;
      }),
    }));
  };

  render() {
    const { commentsList, userInput, userComment } = this.state;
    const countNumber = commentsList.length;

    return (
      <div className="app_bg_container">
        <div className="app_details_container">
          <h1 className="heading">Comments</h1>

          <form
            className="comments_create_full_view"
            onSubmit={this.onAddComment}
          >
            <div className="create">
              <div className="create_comment_container">
                <p className="para">say something about 4.0 technologies</p>
                <input
                  type="text"
                  className="input_user"
                  placeholder="user name"
                  onChange={this.onChangeInput}
                  value={userInput}
                />
                <textarea
                  type="text"
                  className="textarea_input"
                  placeholder="Your comment....."
                  onChange={this.onChangeComment}
                  value={userComment}
                />
                <button type="submit" className="add_button">
                  Add Comment
                </button>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="ajay"
                className="comment_image"
              />
            </div>
          </form>

          <hr className="horizontal_line" />
          <div className="comments_container">
            <p className="counter">{countNumber}</p>
            <p className="counter_name">Comments</p>
          </div>

          <ul className="unorder_list_contaner">
            {commentsList.map((eachComment) => (
              <CommentItem
                eachComment={eachComment}
                ondeleteCommentItem={this.ondeleteCommentItem}
                key={eachComment.id}
                onLikeToggleClick={this.onLikeToggleClick}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
