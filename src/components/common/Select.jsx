import React from 'react';

const Select = ({ 
  label, 
  value, 
  onChange, 
  options = [], 
  className = '',
  id = '',
  name = '' 
}) => {
  return (
    <div className={className}>
      {label && (
        <label 
          htmlFor={id || name} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <select
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 border border-gray-300 rounded-lg 
                   shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 text-gray-900 bg-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
