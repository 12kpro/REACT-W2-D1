import { Component } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
const BASE_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYjZhZGM1NmIzNjAwMTMzZmU1NzAiLCJpYXQiOjE2ODA1MjI2MjcsImV4cCI6MTY4MTczMjIyN30.o95uQAsLLXkKapQuegwZnOjwLwi5er5rwl3OoGIczs8"
};
export default class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "",
      elementId: ""
    },
    error: false,
    errorMsg: "",
    isLoading: false
  };
  componentDidMount = () => {
    this.handleChange("elementId", this.props.asin);
  };
  handleChange = (key, value) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        [key]: value
      }
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      this.setState({ isLoading: true });
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(this.state.newComment),
        headers: {
          "Content-Type": "application/json",
          Authorization: headers.Authorization
        }
      });

      if (response.ok) {
        this.setState({
          newComment: {
            comment: "",
            rate: "",
            elementId: this.props.asin
          }
        });
        //this.fetchComments();
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
        {this.state.isLoading && !this.state.error && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {this.state.error && !this.state.isLoading && <Alert variant="danger">{this.state.errorMsg}</Alert>}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="commentForm.rate">
            <Form.Label>Rate</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={this.state.newComment.rate}
              onChange={(e) => {
                this.handleChange("rate", e.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="commentForm.Comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                this.handleChange("comment", e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
