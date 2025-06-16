import React, { useState } from 'react';

/**
 * InputBox nâng cấp:
 * - Placeholder tùy chỉnh qua props
 * - Validation: input trống sẽ báo lỗi
 * - Giới hạn tối đa 50 ký tự
 * - Styling đẹp hơn
 * - Callback onInputChange khi nhập dữ liệu
 */
function InputBox({
  value,
  onChange,
  placeholder = 'Nhập nội dung...',
  onInputChange, // callback xử lý dữ liệu khi nhập
}) {
  const [error, setError] = useState('');

  // Xử lý khi người dùng nhập
  const handleChange = (e) => {
    let val = e.target.value;
    // Giới hạn 50 ký tự
    if (val.length > 50) {
      val = val.slice(0, 50);
    }
    // Validation: không được để trống
    if (val.trim() === '') {
      setError('Vui lòng nhập nội dung!');
    } else {
      setError('');
    }
    onChange(val); // callback cập nhật state cha
    if (onInputChange) onInputChange(val); // callback xử lý dữ liệu
  };

  // Khi blur (mất focus), kiểm tra trống
  const handleBlur = () => {
    if (value.trim() === '') {
      setError('Vui lòng nhập nội dung!');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '60%' }}>
      <input
        type="text"
        value={value}
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
        {value.length}/50 ký tự
      </span>
    </div>
  );
}

export default InputBox; 