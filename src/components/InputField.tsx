import React from "react";

interface TextFieldProps {
  id: string;
  label: string;
  type: string;
  error?: string;
  inputProps?: unknown;
}

const InputField: React.FC<TextFieldProps> = ({
  id,
  label,
  type,
  inputProps,
  error,
}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        className="border py-2 my-2"
        id={id}
        type={type}
        {...(inputProps ?? {})}
      />
      <div>{error ? <span className="text-red-500">{error}</span> : null}</div>
    </div>
  );
};

export default InputField;
