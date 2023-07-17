import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutContainer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="pd50">
            <p>About Page</p>
            <p>Movie API Home Page Url :- https://www.themoviedb.org/</p>
            <p>Movie API Key url :- https://www.themoviedb.org/settings/api</p>
            <p>
              Movie API Document Page Url :-
              https://www.themoviedb.org/documentation/api
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutContainer;
