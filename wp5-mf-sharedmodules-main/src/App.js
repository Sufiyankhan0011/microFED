// src/App.js
import React from 'react';
import './App.scss';

import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';
import LeftNav from './components/LeftNav';

const components = [
  { name: 'SearchBar', component: <SearchBar /> },
  { name: 'SearchButton', component: <SearchButton /> },
  { name: 'LeftNav', component: <LeftNav /> }
];

function App() {
  return (
    <div className="two-column-layout">
      <div className="header-row">
        <div className="left-header">Component Name</div>
        <div className="right-header">Rendered Component</div>
      </div>
      {components.map(({ name, component }) => (
        <div key={name} className="row">
          <div className="left-column">{name}</div>
          <div className="right-column">{component}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
