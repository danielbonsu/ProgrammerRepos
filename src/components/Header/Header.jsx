import React, { useEffect,useState, useContext } from "react";
import ProgrammersContext from "../../context/ProgrammersReposContext";


import "./Header.scss";

const Header = () => {

 const {programmers, searchProgrammer} =  useContext(ProgrammersContext)
 console.log(programmers, 7777)
 const [searchText, setSearchText] =  useState('') 
 useEffect( () => {
    searchProgrammer(searchText)
 }, [searchText])
  return (
    <div className="header">
      <div className="content">
        <h1 className="mb-4">PROGRAMMERS REPOS</h1>
        <input
          type="text"
          className="formControl"
          placeholder="Find A User"
          value={searchText}
          onChange={e => setSearchText(() => e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
