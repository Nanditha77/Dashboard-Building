// Widget.js - Complete version with tabbed modal
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlus, FaTimes } from 'react-icons/fa';
import {
  addWidget,
  removeWidget,
  setSelectedCategory,
  toggleAddWidgetModal,
  selectDashboardData,
  selectSearchTerm,
  selectSelectedCategory,
  selectIsAddWidgetModalOpen,
  selectFilteredDashboardData,
  selectTotalWidgetsCount,
} from '../store/dashboardSlice';
import './Widget.css';

const Widget = () => {
  const dispatch = useDispatch();
  
  // Redux selectors
  const dashboardData = useSelector(selectDashboardData);
  const searchTerm = useSelector(selectSearchTerm);
  const selectedCategory = useSelector(selectSelectedCategory);
  const isAddWidgetModalOpen = useSelector(selectIsAddWidgetModalOpen);
  const filteredData = useSelector(selectFilteredDashboardData);
  const totalWidgetsCount = useSelector(selectTotalWidgetsCount);
  
  const [newWidget, setNewWidget] = useState({ name: '', text: '' });
  const [activeTab, setActiveTab] = useState('add'); 

  const handleAddWidget = () => {
    if (newWidget.name && newWidget.text && selectedCategory) {
      dispatch(addWidget({
        categoryId: selectedCategory,
        widget: {
          name: newWidget.name,
          text: newWidget.text
        }
      }));

      // Reset form
      setNewWidget({ name: '', text: '' });
      dispatch(setSelectedCategory(''));
      dispatch(toggleAddWidgetModal(false));
      setActiveTab('add');
    }
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };

  const handleOpenAddWidgetModal = (categoryId) => {
    dispatch(setSelectedCategory(categoryId));
    dispatch(toggleAddWidgetModal(true));
    setActiveTab('add');
  };

  const handleCloseAddWidgetModal = () => {
    setNewWidget({ name: '', text: '' });
    dispatch(setSelectedCategory(''));
    dispatch(toggleAddWidgetModal(false));
    setActiveTab('add');
  };

  return (
    <div className="dashboard">
    
      {searchTerm && (
        <div className="search-results-summary">
          <p>
            Showing {totalWidgetsCount} result{totalWidgetsCount !== 1 ? 's' : ''} for: 
            <strong> "{searchTerm}"</strong>
          </p>
          {totalWidgetsCount === 0 && (
            <p className="no-results-text">No widgets found. Try different keywords.</p>
          )}
        </div>
      )}

      <div className="dashboard-content">
        {totalWidgetsCount === 0 && searchTerm ? (
          <div className="no-results-container">
            <h3>No widgets found</h3>
            <p>Try searching with different keywords</p>
          </div>
        ) : (
          filteredData.categories.map((category) => (
            <div key={category.id} className="category-section">
              <h3 className="category-title">
                {category.name}
                {searchTerm && <span className="widget-count"> ({category.widgets.length})</span>}
              </h3>
              <div className="widgets-grid">
                {category.widgets.map((widget) => (
                  <div key={widget.id} className="widget-card">
                    <div className="widget-header">
                      <h4 className="widget-title">{widget.name}</h4>
                      <button 
                        className="remove-widget-btn"
                        onClick={() => handleRemoveWidget(category.id, widget.id)}
                        title="Remove widget"
                      >
                        <FaTimes />
                      </button>
                    </div>
                    <div className="widget-content">
                      <pre>{widget.text}</pre>
                    </div>
                  </div>
                ))}
                
                {!searchTerm && (
                  <div 
                    className="widget-card add-widget-card"
                    onClick={() => handleOpenAddWidgetModal(category.id)}
                  >
                    <div className="add-widget-content">
                      <FaPlus className="add-icon" />
                      <span>Add Widget</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal with Tabs - Exact Design */}
      {isAddWidgetModalOpen && (
        <div className="modal-overlay" onClick={handleCloseAddWidgetModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add Widget</h3>
              <button 
                className="modal-close-btn"
                onClick={handleCloseAddWidgetModal}
                title="Close"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Tabs Section */}
            <div className="modal-tabs">
              <button 
                className={`tab-btn ${activeTab === 'add' ? 'active' : ''}`}
                onClick={() => setActiveTab('add')}
              >
                Add Widget
              </button>
              <button 
                className={`tab-btn ${activeTab === 'manage' ? 'active' : ''}`}
                onClick={() => setActiveTab('manage')}
              >
                Manage Widgets
              </button>
            </div>
            
            <div className="modal-body">
              {activeTab === 'add' ? (
                // ADD WIDGET TAB
                <>
                  <div className="form-group">
                  <div className="section-description">
                    <p>Personalize your dashboard by adding the following widget</p>
                  </div>
                    <label>Select Category: *</label>
                    <select 
                      value={selectedCategory} 
                      onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
                      className="form-select"
                    >
                      <option value="">Choose a category...</option>
                      {dashboardData.categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Widget Name: *</label>
                    <input
                      type="text"
                      value={newWidget.name}
                      onChange={(e) => setNewWidget({...newWidget, name: e.target.value})}
                      placeholder="Enter widget name"
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Widget Text: *</label>
                    <textarea
                      value={newWidget.text}
                      onChange={(e) => setNewWidget({...newWidget, text: e.target.value})}
                      placeholder="Enter widget content"
                      className="form-textarea"
                      rows="5"
                    />
                  </div>
                </>
              ) : (
                // MANAGE WIDGETS TAB
                <div className="manage-widgets-section">
                  
                  
                  {dashboardData.categories.map(category => (
                    <div key={category.id} className="category-manage-section">
                      <h4 className="category-manage-title">{category.name}</h4>
                      <div className="widgets-checkbox-list">
                        {category.widgets.length > 0 ? (
                          category.widgets.map(widget => (
                            <label key={widget.id} className="widget-checkbox-item">
                              <input
                                type="checkbox"
                                checked={true}
                                onChange={() => handleRemoveWidget(category.id, widget.id)}
                                className="widget-checkbox"
                              />
                              <div className="widget-checkbox-content">
                                <span className="widget-checkbox-label">{widget.name}</span>
                                <span className="widget-checkbox-text">
                                  {widget.text.length > 60 
                                    ? widget.text.substring(0, 60) + '...' 
                                    : widget.text}
                                </span>
                              </div>
                            </label>
                          ))
                        ) : (
                          <p className="no-widgets-text">No widgets in this category</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="modal-footer">
              {activeTab === 'add' ? (
                <>
                  <button 
                    className="btn btn-secondary"
                    onClick={handleCloseAddWidgetModal}
                  >
                    Cancel
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={handleAddWidget}
                    disabled={!newWidget.name || !newWidget.text || !selectedCategory}
                  >
                    Add Widget
                  </button>
                </>
              ) : (
                <button 
                  className="btn btn-primary"
                  onClick={handleCloseAddWidgetModal}
                >
                  Confirm
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Widget;