import React from "react";

interface Option {
  value: string;
  label: string;
}

interface TextFieldProps {
  id: string;
  label: string;
  error?: string;
  inputProps?: {};
  options: Option[];
}

const SelectField: React.FC<TextFieldProps> = ({
  id,
  label,
  options,
  inputProps,
  error,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select {...inputProps} id={id}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>{error && <span className="text-red-500">{error}</span>}</div>
    </div>
  );
};

export default SelectField;
