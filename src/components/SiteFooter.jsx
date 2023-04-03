import { Nav } from "react-bootstrap";

const SiteFooter = (props) => (
  <>
    <Nav className="ms-auto d-flex align-items-center mb-5">{props.children}</Nav>
  </>
);
export default SiteFooter;
