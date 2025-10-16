import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus, FaSyncAlt, FaEllipsisV, FaClock, FaChevronDown } from 'react-icons/fa';
import { toggleAddWidgetModal, setSelectedCategory } from '../store/dashboardSlice';
import './CategoryCard.css';

const CategoryCard = () => {
  const dispatch = useDispatch();
  const [selectedPeriod, setSelectedPeriod] = useState('Last 2 days');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const timePeriods = [
    'Last 2 days',
    'Last 7 days',
    'Last 30 days',
    'Last 3 months',
    'Last year'
  ];

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false);
  };

  // ✅ FIX: Add click handler for Add Widget button
  const handleAddWidgetClick = () => {
    dispatch(setSelectedCategory('')); // Clear any pre-selected category
    dispatch(toggleAddWidgetModal(true));
  };

  return (
    <div className="dashboard-controls">
      <div className='dashboard-title'>
        <h2>CNAPP Dashboard</h2>
      </div>
      
      <div className="controls-right">
        {/* ✅ FIX: Add onClick handler */}
        <button className="add-widget-btn" onClick={handleAddWidgetClick}>
          <FaPlus className="icon" />
          Add Widget
        </button>
        <button className="control-btn refresh-btn" title="Refresh">
          <FaSyncAlt />
        </button>
        
        <button className="control-btn menu-btn" title="More options">
          <FaEllipsisV />
        </button>
        
        <div className="time-selector">
          <button 
            className="time-dropdown-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <FaClock className="clock-icon" />
            <span>{selectedPeriod}</span>
            <FaChevronDown className={`chevron ${isDropdownOpen ? 'open' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {timePeriods.map((period) => (
                <button
                  key={period}
                  className={`dropdown-item ${selectedPeriod === period ? 'active' : ''}`}
                  onClick={() => handlePeriodChange(period)}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;