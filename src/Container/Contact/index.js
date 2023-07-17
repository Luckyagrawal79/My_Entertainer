import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
import "./style.css";
const ContactContainer = () => {
  const myData = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/outlook.lucky.79/",
      text: "Follow my facebook.",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/lucky-agrawal-8576ba27b/",
      text: "Follow my linkedin.",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/LuckyAgrawal_",
      text: "Follow my twitter.",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/who.luckyyy/",
      text: "Follow my Instagram.",
    },
    {
      name: "GitHub",
      link: "https://github.com/Luckyagrawal79",
      text: "Follow my github.",
    },
    {
      name: "Email",
      link: "mailto:luckyagarwal79@gmail.com",
      text: "Write me a mail",
    },
  ];
  return (
    <div className="contactWrap">
      <Container>
        <Row>
          <Col>
            <p>CONNECT WITH US</p>
            <h1>Get in Touch</h1>
          </Col>
        </Row>
        <Row>
          <Col className="conectIcon">
            <ul className="socialIconsList">
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/outlook.lucky.79/"
                  target="_blank"
                >
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/lucky-agrawal-8576ba27b/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://twitter.com/LuckyAgrawal_"
                  target="_blank"
                >
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/who.luckyyy/"
                  target="_blank"
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://github.com/Luckyagrawal79"
                  target="_blank"
                >
                  <BsGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup className="contactList">
              {myData && myData.length > 0
                ? myData.map((item) => {
                    return (
                      <ListGroup.Item key={item.name}>
                        <span>{item.text}</span>
                        <a href={item.link} rel="noreferrer" target="_blank">
                          {item.link}
                        </a>
                      </ListGroup.Item>
                    );
                  })
                : ""}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactContainer;
