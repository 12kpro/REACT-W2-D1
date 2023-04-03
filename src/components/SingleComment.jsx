import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";

export default class SingleComment extends Component {
  render() {
    return (
      <ListGroup.Item>
        {this.props.txt}
        <Button
          variant="danger"
          className="btn-close"
          onClick={() => this.props.deleteSelected(this.props.id)}
        ></Button>
      </ListGroup.Item>
    );
  }
}
