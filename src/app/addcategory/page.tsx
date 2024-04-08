"use client";
import InputField from "@/components/InputField";
import React from "react";
import { useForm, SubmitHandler ,FieldValues} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const categorySchema = z.object({
  email: z.string().email(),
  username: z.string().min(4).max(10),
  contact: z.string().min(11),
});

interface IFormInput {
  email: string;
  username: string;
  contact: string;
}

const ADDCATEGORY = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center h-1/2">
        <div className="border w-1/2 p-10">
          <InputField
            id="email"
            label="email"
            type="email"
            inputProps={register("email")}
            error={errors.email?.message as string}
          />

          <InputField
            id="username"
            label="username"
            type="text"
            inputProps={register("username")}
            error={errors.username?.message as string}
          />

          <InputField
            id="contact"
            label="contact"
            type="number"
            inputProps={register("contact")}
            error={errors.contact?.message as string}
          />

          <div className="my-10">
            <button
              type="submit"
              className="border bg-slate-600 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ADDCATEGORY;
