import { Component } from "react";
import { Card, Badge, Col, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false
  };

  render() {
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Text>{this.props.title}</Card.Text>
            <Badge bg="secondary">{this.props.price}</Badge>
            <Button
              variant="primary"
              onClick={() => {
                this.setState({ selected: !this.state.selected });
              }}
            >
              Show Comment
            </Button>
          </Card.Body>
          {this.state.selected && (
            <Card.Footer className="text-muted">
              <CommentArea asin={this.props.asin} />
            </Card.Footer>
          )}
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
