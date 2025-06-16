import React, { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import DisplayButton from './components/DisplayButton';

function App() {
  // State lưu giá trị input và nội dung hiển thị
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  // Khi nhấn button, cập nhật nội dung hiển thị
  const handleDisplay = () => {
    setDisplayText(inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Ô input và button */} 
        <div style={{ marginBottom: '20px' }}>
        <InputBox
          value={inputValue}
          onChange={setInputValue}
          placeholder="Nhập tên của bạn..."
          onInputChange={(val) => { /* Xử lý thêm nếu cần */ }}
        />
          <DisplayButton onClick={handleDisplay} />
        </div>
        {/* Hiển thị nội dung */}
        {displayText && (
          <p style={{ fontSize: '20px', color: '#61dafb' }}>
            Nội dung: {displayText}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
