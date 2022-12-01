import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import ProgrammersContext from "../../context/ProgrammersReposContext";

import "./Header.scss";

const Header = () => {
  const { filterProgrammers, loading } = useContext(
    ProgrammersContext
  );

  const [searchText, setSearchText] = useState("");      


  const handleSearch =  () => {
    if (searchText.trim().length > 0) {
        filterProgrammers(searchText) 
    } else {
       alert('search field cannot be empty')
    }

  }
    

   

 
  
   


  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="header">
      <div className="content">

        <input
          type="text"
          className="formControl"
          placeholder="Enter Name or Email Address"
          value={searchText}
          onChange={handleChange}
        />
        
      </div>
      {loading ? (<Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>) : <Button onClick={handleSearch} variant='primary'>Search</Button> }
      
    </div>
  );
};

export default Header;
