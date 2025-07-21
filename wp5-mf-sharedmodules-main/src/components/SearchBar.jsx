// import React from 'react';

// const SearchBar = () => {
//   return <input type="text"
//    placeholder="Search..." 
//    style={{ padding: '8px', width: '200px' }} 
//    />;
// };

// export default SearchBar;

import React from 'react';

const SearchBar = ({ onChange }) => {
  const [text, setText] = React.useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    if (onChange) {
      onChange(e.target.value); // send up to shell
    }
  };

  return (
    <input
      type="text"
      placeholder="Search menu..."
      value={text}
      onChange={handleChange}
      style={{ padding: '8px', width: '200px' }}
    />
  );
};

export default SearchBar;

