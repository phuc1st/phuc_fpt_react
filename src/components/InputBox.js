import React, { useState, useEffect, useRef } from 'react';

/**
 * InputBox nâng cấp:
 * - Placeholder tùy chỉnh qua props
 * - Validation: input trống sẽ báo lỗi
 * - Auto-focus khi render
 * - Debounce khi nhập liệu
 */
function InputBox({
  value,
  onChange,
  placeholder = 'Nhập nội dung...'
}) {
  const [inputValue, setInputValue] = useState(value || '');
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const debounceTimeout = useRef();

  // Auto-focus khi render
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Khi value từ props thay đổi, cập nhật local state
  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  // Debounce cập nhật state cha
  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      onChange(inputValue);
    }, 400); // 400ms debounce
    return () => clearTimeout(debounceTimeout.current);
    // eslint-disable-next-line
  }, [inputValue]);

  // Validation khi blur hoặc khi inputValue thay đổi
  const handleBlur = () => {
    if (inputValue.trim() === '') {
      setError('Vui lòng nhập nội dung!');
    } else {
      setError('');
    }
  };

  // Xử lý khi người dùng nhập
  const handleChange = (e) => {
    let val = e.target.value;
    setInputValue(val);
    if (val.trim() === '') {
      setError('Vui lòng nhập nội dung!');
    } else {
      setError('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '60%' }}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        maxLength={50}
        style={{
          padding: '10px',
          fontSize: '16px',
          border: error ? '2px solid #e74c3c' : '2px solid #ccc',
          borderRadius: '6px',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          transition: 'border 0.2s',
        }}
      />
      {/* Thông báo lỗi */}
      {error && (
        <span style={{ color: '#e74c3c', fontSize: '14px', marginTop: '4px' }}>
          {error}
        </span>
      )}
      {/* Hiển thị số ký tự đã nhập */}
      <span style={{ fontSize: '12px', color: '#888', marginTop: '2px', alignSelf: 'flex-end' }}>
        {inputValue.length}/50 ký tự
      </span>
    </div>
  );
}

export default InputBox; 