// CustomSelect.tsx
import React, { useState, useRef } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        onClick={handleSelectClick}
        className="text-neutral-400 text-xs relative"
      >
        {options.find((option) => option.value === value)?.label ||
          "Select an option"}
        <span className="absolute top-[2px] right-2">
          {isOpen ? <FaAngleUp size={15} /> : <FaAngleDown size={15} />}{" "}
        </span>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-4 -ml-2 w-full bg-white border-[1px] border-neutral-300 shadow-lg rounded-md overflow-hidden">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className="cursor-pointer font-medium hover:bg-black hover:text-white p-2 text-xs"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
