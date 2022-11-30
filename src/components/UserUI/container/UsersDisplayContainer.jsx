import React, {useContext, useEffect} from "react";
import ProgrammersContext from "../../../context/ProgrammersReposContext";
import "./Container.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserDisplayItem from "../UserDisplayItem/UserDisplayItem";
const UsersDisplayContainer = () => {

  const {allProgrammers, getAllProgrammers} = useContext(ProgrammersContext)
 

  useEffect(() => {
    getAllProgrammers()
  },[])


  return (
    <Container>
      <Row>
        {allProgrammers.length > 0 && allProgrammers.map((programmer, idx) => (
           <Col key={idx}> <UserDisplayItem userDetails={programmer}/></Col>
        ))}
       
      </Row>
    </Container>
  );
};

export default UsersDisplayContainer;
