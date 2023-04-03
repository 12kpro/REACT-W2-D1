import { Component } from "react";
import { Form, Button, ListGroup, Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentsList";
const BASE_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYjZhZGM1NmIzNjAwMTMzZmU1NzAiLCJpYXQiOjE2ODA1MjI2MjcsImV4cCI6MTY4MTczMjIyN30.o95uQAsLLXkKapQuegwZnOjwLwi5er5rwl3OoGIczs8"
};

export default class CommentArea extends Component {
  render() {
    return (
      <>
        <CommentList asin={this.props.asin} />
        <AddComment asin={this.props.asin} />
      </>
    );
  }
}
