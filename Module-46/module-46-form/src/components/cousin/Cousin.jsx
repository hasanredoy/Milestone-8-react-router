import React from 'react';

const Cousin = ({cousin}) => {
  return (
    <div className='border border-gray-500 rounded-lg p-5'>
      <h1>Cousin</h1>
      <h2>{cousin}</h2>
    </div>
  );
};

export default Cousin;