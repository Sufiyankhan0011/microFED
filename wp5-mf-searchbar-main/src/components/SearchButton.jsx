import React from 'react';

const SearchButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '8px 12px', marginLeft: '8px' }}>
      🔍 Search
    </button>
  );
};

export default SearchButton;
