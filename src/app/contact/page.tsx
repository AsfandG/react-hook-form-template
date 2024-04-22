"use client";

import CustomSelect from "@/components/CustomSelect";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, "email is required!"),
  password: z.string().min(1, "password is required!"),
  age: z.string().min(1, "age is required!"),
  address: z.string().min(1, "address is required!"),
});

export type FormFields = z.infer<typeof schema>;
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center my-10 border-b-[2px] border-black inline-block">
          Form setup
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="text-black">
        <Input<FormFields>
          register={register}
          name="email"
          label="Email"
          error={errors.email?.message}
        />
        <Input<FormFields>
          register={register}
          name="password"
          label="Password"
          error={errors.password?.message}
        />
        <Input<FormFields>
          register={register}
          name="age"
          label="age"
          error={errors.age?.message}
        />
        <Input<FormFields>
          register={register}
          name="address"
          label="address"
          error={errors.address?.message}
        />

        <button
          disabled={isSubmitting}
          className="disabled:bg-orange-200 block m-2 bg-orange-600 text-white rounded-md px-3 py-1"
        >
          {isSubmitting ? "Processing..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
