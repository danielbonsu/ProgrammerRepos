import React, {useContext, useEffect, useState} from "react";
import ProgrammersContext from "../../../context/ProgrammersReposContext";
import "./Container.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserDisplayItem from "../UserDisplayItem/UserDisplayItem";
import Loader from "../../Loaders/Loader";
import ReactPaginate from 'react-paginate';


const UsersDisplayContainer = () => {
  const [currentItems, setCurrentItems] =  useState([])
  const {allProgrammers,filteredProgrammers,loading, getAllProgrammers} = useContext(ProgrammersContext)
  const programmerListToIterate =  filteredProgrammers ? filteredProgrammers : allProgrammers
  console.log(programmerListToIterate, 99988888)
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] =  useState(0)
  const itemsPerPage = 5
 
 
  useEffect(() => {
    getAllProgrammers()

    // eslint-disable-next-line
  },[])

  
  
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(programmerListToIterate.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(programmerListToIterate.length / itemsPerPage))
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  }, [itemOffset, itemsPerPage, programmerListToIterate])
  


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % programmerListToIterate.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

 
  return (
    <Container>
      {loading && <Loader/>}
      <Row>
        {currentItems.length > 0 && currentItems.map((programmer, idx) => (
           <Col key={idx}> <UserDisplayItem userDetails={programmer}/></Col>
        ))}
       
      </Row>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active "
      />
     
    </Container>
  );
};

export default UsersDisplayContainer;
