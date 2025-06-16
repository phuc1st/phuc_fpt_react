import React from 'react';

// Component button nhận callback khi click
function DisplayButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ marginLeft: '10px', padding: '8px 16px', fontSize: '16px' }}
    >
      Hiển thị
    </button>
  );
}

export default DisplayButton; 