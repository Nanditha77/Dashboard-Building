import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header'
import CategoryCard from './components/CategoryCard'
import Widget from './components/Widget'
import './App.css'

const App = () => {
      const [searchTerm, setSearchTerm] = useState('');
        const handleSearch = (term) => {
            setSearchTerm(term);
          };
  return (
     <Provider store={store}>
    <div className="app-container">
      <Header className="headermain" onSearch={handleSearch} />
      <CategoryCard className="category-cardmain"/>
      <Widget className="widgetmain" searchTerm={searchTerm} />
    </div>
    </Provider>
  );
};

export default App;