import React from 'react';

// Component ô input nhận giá trị và callback khi thay đổi
function InputBox({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Nhập nội dung..."
      style={{ padding: '8px', fontSize: '16px', width: '60%' }}
    />
  );
}

export default InputBox; 