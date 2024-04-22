"use client";
import React from "react";
import { FieldValues, UseFormRegister, Path } from "react-hook-form";

interface CustomInputProps<TFieldValues extends FieldValues> {
  register: UseFormRegister<TFieldValues>;
  name: keyof TFieldValues;
  label?: string;
  error?: string;
}

const Input = <TFieldValues extends FieldValues>({
  register,
  name,
  label,
  error,
}: CustomInputProps<TFieldValues>) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        {...register(name as Path<TFieldValues>)}
        className="border-[1px] border-black"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
