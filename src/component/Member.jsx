import React from "react";
import "../css/member.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/responsive.css";
import { Accordion, Button, Card } from "react-bootstrap";

const Member = (props) => {
  return (
    <ul className="user">
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <div className="user-name">{props.data.name.first}</div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <img src={props.data.picture.large} alt="user-pic" />
              <p>Email:{props.data.email}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </ul>
  );
};

export default Member;
