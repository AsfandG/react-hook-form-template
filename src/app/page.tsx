"use client";

import CustomSelect from "@/components/CustomSelect";
import FileInput from "@/components/FileInput";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const options = [
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "youtube", label: "Youtube" },
  { value: "twitter", label: "Twitter" },
  { value: "friends", label: "Friends" },
  { value: "others", label: "Others" },
];

const schema = z.object({
  name: z.string().min(1, "name is required!"),
  found: z.string().min(1, "Please select how you found us."),
  image: z.custom<File>((v) => v instanceof File, {
    message: "Image is required",
  }),
  //   file: z.any().refine(value => value && value.length > 0, {
  //     message: 'A file is required',
  //  }),
});

export type FormFields = z.infer<typeof schema>;
const HomePage = () => {
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
          name="name"
          label="Name"
          error={errors.name?.message}
        />

        <div>
          <label className="font-medium text-xs block mb-1">
            Found Us From
          </label>
          <Controller
            name="found"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <CustomSelect
                options={options}
                value={field.value}
                onChange={field.onChange}
                className="rounded-md w-full px-2 cursor-pointer py-3 shadow border-[1px] border-neutral-300"
              />
            )}
          />
          {errors.found && (
            <p className="text-xs text-red-500">{errors.found?.message}</p>
          )}
        </div>
        {/* Image Upload */}
        <div className="m-4">
          <Controller
            name="image" // This should match the key in your Zod schema
            control={control}
            render={({ field: { onChange } }) => (
              <FileInput onChange={onChange} label="Upload a file" />
            )}
          />
          {errors.image && (
            <p className="text-xs text-red-500">{errors.image?.message}</p>
          )}
        </div>

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

export default HomePage;
