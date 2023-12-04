import React, { useState } from 'react';
import '../../styles/Dropdown.css';
import { Link } from 'react-router-dom';

interface Option{
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
}

export const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'All'}
      </div>
      {isDropdownOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <Link
              to='/products/${option.value}'
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
