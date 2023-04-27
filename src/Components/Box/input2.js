import React, { useState } from 'react';
const MyFormtwo = () => {
  const [textValue, setTextValue] = useState('');

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <form>
      <textarea
        value={textValue}
        onChange={handleChange}
        placeholder="You'll have a great time at this comfortable place to stay."
        rows={5}
        cols={80}
        style={{ border: '1px solid #000', padding: '8px' }} 
      />
    
    </form>
  );
};

export default MyFormtwo;

