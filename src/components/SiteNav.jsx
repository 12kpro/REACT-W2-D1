import { Container, Nav, Navbar } from "react-bootstrap";

const SiteNav = (props) => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">{props.children}</Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default SiteNav;
