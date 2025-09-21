// store/dashboardSlice.js - Redux slice for dashboard management
import { createSlice } from '@reduxjs/toolkit';
import initialDashboardData from '../components/initialDashboardData';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    data: initialDashboardData,
    searchTerm: '',
    selectedCategory: '',
    isAddWidgetModalOpen: false,
  },
  reducers: {
    // Add a new widget to a category
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.data.categories.find(cat => cat.id === categoryId);
      if (category) {
        const newWidget = {
          id: `widget-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: widget.name,
          text: widget.text,
        };
        category.widgets.push(newWidget);
      }
    },
    
    // Remove a widget from a category
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.data.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    
    // Set search term
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    
    // Set selected category for adding widgets
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    
    // Toggle add widget modal
    toggleAddWidgetModal: (state, action) => {
      state.isAddWidgetModalOpen = action.payload;
    },
    
    // Reset dashboard to initial state
    resetDashboard: (state) => {
      state.data = initialDashboardData;
      state.searchTerm = '';
      state.selectedCategory = '';
      state.isAddWidgetModalOpen = false;
    },
    
    // Bulk add widgets (for future use)
    addMultipleWidgets: (state, action) => {
      const { categoryId, widgets } = action.payload;
      const category = state.data.categories.find(cat => cat.id === categoryId);
      if (category) {
        widgets.forEach(widget => {
          const newWidget = {
            id: `widget-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            name: widget.name,
            text: widget.text,
          };
          category.widgets.push(newWidget);
        });
      }
    },
    
    // Update existing widget
    updateWidget: (state, action) => {
      const { categoryId, widgetId, updatedWidget } = action.payload;
      const category = state.data.categories.find(cat => cat.id === categoryId);
      if (category) {
        const widgetIndex = category.widgets.findIndex(widget => widget.id === widgetId);
        if (widgetIndex !== -1) {
          category.widgets[widgetIndex] = { ...category.widgets[widgetIndex], ...updatedWidget };
        }
      }
    },
  },
});

// Export actions
export const {
  addWidget,
  removeWidget,
  setSearchTerm,
  setSelectedCategory,
  toggleAddWidgetModal,
  resetDashboard,
  addMultipleWidgets,
  updateWidget,
} = dashboardSlice.actions;

// Export selectors
export const selectDashboardData = (state) => state.dashboard.data;
export const selectSearchTerm = (state) => state.dashboard.searchTerm;
export const selectSelectedCategory = (state) => state.dashboard.selectedCategory;
export const selectIsAddWidgetModalOpen = (state) => state.dashboard.isAddWidgetModalOpen;

// Filtered data selector
export const selectFilteredDashboardData = (state) => {
  const { data, searchTerm } = state.dashboard;
  
  if (!searchTerm.trim()) {
    return data;
  }
  
  const filteredCategories = data.categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      widget.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.widgets.length > 0);
  
  return { categories: filteredCategories };
};

// Get total widgets count
export const selectTotalWidgetsCount = (state) => {
  const filteredData = selectFilteredDashboardData(state);
  return filteredData.categories.reduce((total, category) => total + category.widgets.length, 0);
};

export default dashboardSlice.reducer;