"use client";
import { Button } from "@/components/shared/Button";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  mobileNumber: string;
  companyPosition: string;
  message: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid-cols-2 justify-between gap-5  md:mb-10 md:grid">
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-[#A0A2A7] outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-[#A0A2A7] outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
      </div>
      <div className="grid-cols-2 justify-between gap-5  md:mb-10 md:grid">
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-[#A0A2A7] outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-[#A0A2A7] outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
      </div>

      <div className="grid-cols-2 justify-between gap-5  md:mb-10 md:grid">
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-[#A0A2A7] outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="text"
          placeholder="Company"
          {...register("company", { required: true })}
        />
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-[#A0A2A7] outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="text"
          placeholder="Company Position"
          {...register("companyPosition", { required: true })}
        />
      </div>

      <div className="  md:mb-10 ">
        <input
          className="w-full border-b border-slate-300 bg-transparent pb-5 text-[#A0A2A7] outline-none placeholder:text-lg 
          max-md:mb-5"
          type="text"
          placeholder="Message"
          {...register("message", { required: true })}
        />
      </div>
      <button
        className="mt-10 border bg-primary-color-2 px-10  py-[15px] font-medium text-[#292C32]"
        type="submit"
      >
        Get Started
      </button>
    </form>
  );
};
