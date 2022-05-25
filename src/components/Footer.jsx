import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        Made with <i
          className="fas fa-heart"
          style={{ color: "red" }}
        /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/syliow"
          aria-label="My GitHub"
        >
          Shanyi Liow
        </a>{" "}
      </Container>
    </footer>
  );
};

export default Footer;
