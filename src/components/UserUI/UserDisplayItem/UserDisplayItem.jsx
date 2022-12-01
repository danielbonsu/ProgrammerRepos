import React from "react";
import { Card} from "react-bootstrap";

import ListGroup from "react-bootstrap/ListGroup";
import { FaUserAlt, FaGlobe, FaClock, FaEnvelope, FaDochub} from "react-icons/fa";
import "./UserDisplayItem.scss";
const UserDisplayItem = ({ userDetails }) => {
  const {
    avatar_url,
    location,
    login,
    email,
    name,
    created_at,
    updated_at,
    public_repos,
    repos_url
  } = userDetails;

 
  return (
    <div className="programmerCard shadow">
      <Card>
        <Card.Img
          variant="top"
          src={avatar_url}
        />
       
          <ListGroup style={{ fontSize: "12px"}} >
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span><FaUserAlt/></span>
              <span>{`${name} (${login})`}</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span><FaGlobe/></span>
              <span>{location ?  location : 'None'}</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span><FaClock/></span>
              <span>{created_at}</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span><FaEnvelope/></span>
              <span>{email ? email : 'None'}</span>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span><FaDochub/></span>
              <span> <a target='_blank' href={repos_url}>{public_repos}</a> Repos</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span><FaClock/></span>
              <span>{updated_at}</span>
            </ListGroup.Item>
            
          </ListGroup>
       
      </Card>
    </div>
  );
};

export default UserDisplayItem;
