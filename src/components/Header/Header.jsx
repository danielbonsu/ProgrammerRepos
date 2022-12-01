import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import ProgrammersContext from "../../context/ProgrammersReposContext";

import "./Header.scss";

const Header = () => {
  const { filterProgrammers, clearFiltered } = useContext(
    ProgrammersContext
  );

  const [searchText, setSearchText] = useState("");      

useEffect(() => {
    
    if (searchText.trim().length > 0) {
        filterProgrammers(searchText) 
    } else {
        clearFiltered()
    }
   
}, [searchText])
 
  
   


  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="header">
      <div className="content">
        <h1 className="mb-4">PROGRAMMERS REPOS</h1>
        <input
          type="text"
          className="formControl"
          placeholder="Find A User"
          value={searchText}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Header;
