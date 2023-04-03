import { Component } from "react";
import { ListGroup, Spinner } from "react-bootstrap";

import SingleComment from "./SingleComment";
const BASE_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYjZhZGM1NmIzNjAwMTMzZmU1NzAiLCJpYXQiOjE2ODA1MjI2MjcsImV4cCI6MTY4MTczMjIyN30.o95uQAsLLXkKapQuegwZnOjwLwi5er5rwl3OoGIczs8"
};
export default class CommentList extends Component {
  state = {
    comments: [],
    error: false,
    errorMsg: "",
    isLoading: true
  };
  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      const response = await fetch(`${BASE_URL}${this.props.asin}`, { headers: headers });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      } else {
        this.setState({ error: true });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleDelete = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: headers.Authorization
        }
      });

      if (response.ok) {
        const data = await response.json();
        const newCommentList = this.state.comments.filter((item) => item._id !== data._id);
        this.setState({ comments: newCommentList });
      } else {
        this.setState({ error: true });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    return (
      <>
        <ListGroup variant="flush">
          {this.state.isLoading && !this.state.error && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {this.state.comments.length === 0 && !this.state.error && !this.state.isLoading && (
            <ListGroup.Item>No comments Found</ListGroup.Item>
          )}
          {this.state.error && !this.state.isLoading && <ListGroup.Item>{this.state.errorMsg}</ListGroup.Item>}
          {this.state.comments.map((comment) => (
            <SingleComment
              key={comment._id}
              txt={comment.comment}
              id={comment._id}
              deleteSelected={this.handleDelete}
            />
          ))}
        </ListGroup>
      </>
    );
  }
}
