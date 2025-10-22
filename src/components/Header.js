// Header.js - Using Redux for search
import React from 'react';
import { useDispatch } from 'react-redux';
import { FaUser, FaBell } from "react-icons/fa";
import { setSearchTerm } from '../store/dashboardSlice';
import SearchBar from './SearchBar';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();

  const handleSearch = (searchValue) => {
    dispatch(setSearchTerm(searchValue));
  };

  return (
    <div className="header">
      <div className="header-left">
        <h5>Home {'>'} <h6 style={{ color: "#0b2347ff" }}>Dashboard V2</h6></h5>
      </div>
      
      <div className="header-center">
        <SearchBar 
          placeholder="Search anything..." 
          onSearch={handleSearch} 
        />
      </div>
      
      <div className="header-right">
        <div className="notification-icon">
          <FaBell size={20} color="#333" />
        </div>
        <div className="user-icon">
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default Header;