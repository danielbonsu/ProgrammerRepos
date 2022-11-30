import React, { useEffect,useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaUserAlt } from "react-icons/fa";
import "./Header.scss";

const Header = () => {

 const [searchText, setSearchText] =  useState('') 
  return (
    <div className="header">
      <div className="content">
        <h1 className="mb-4">PROGRAMMERS REPOS</h1>
        <input
          type="text"
          className="formControl"
          placeholder="Find A User"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
