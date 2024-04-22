"use client";
import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface FileInputProps {
  onChange: (value: File | null) => void;
  label?: string;
  error?: string;
}

const FileInput = ({ onChange, label, error }: FileInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Manually update the form state with the FileList
    onChange(event.target.files ? event.target.files[0] : null);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input type="file" onChange={handleChange} />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FileInput;
