import React, { useState } from 'react';

const MyForm = () => {
  const [textValue, setTextValue] = useState('');

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <form>
      <textarea
        value={textValue}
        onChange={handleChange}
        placeholder="Enter text here..."
        rows={1}
        cols={80}
        style={{ border: '1px solid #000', padding: '8px' }} 
      />
    
    </form>
  );
};

export default MyForm;

