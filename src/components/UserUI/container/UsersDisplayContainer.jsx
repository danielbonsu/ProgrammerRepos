import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import ProgrammersContext from "../../../context/ProgrammersReposContext";
import "./Container.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import UserDisplayItem from "../UserDisplayItem/UserDisplayItem";
import Loader from "../../Loaders/Loader";
import ReactPaginate from "react-paginate";

const UsersDisplayContainer = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const {
    allProgrammers,
    filteredProgrammers,
    loading,
  } = useContext(ProgrammersContext);


  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  // useEffect(() => {
  //   getAllProgrammers();

  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      filteredProgrammers.slice(itemOffset, endOffset)
    );
    setPageCount(
      Math.ceil(
        filteredProgrammers.length / itemsPerPage
      )
    );
    console.log(
      `Loading items from ${itemOffset} to ${endOffset}`
    );
  }, [itemOffset, itemsPerPage, filteredProgrammers]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) %
      filteredProgrammers.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <Container>
     
      {currentItems.length < 1 && (
        <Alert variant="primary" className="text-center mt-4">
          No User Filtered or User Not Found
        </Alert>
      )}
      <Row>
        {currentItems.length > 0 &&
          currentItems.map((programmer, idx) => (
            <Col key={idx}>
              {" "}
              <UserDisplayItem userDetails={programmer} />
            </Col>
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
