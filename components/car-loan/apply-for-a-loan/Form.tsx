"use client";
import { Button } from "@/components/shared/Button";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  loanAmount: number;
  loanTeam: string;
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
      <div className="grid grid-cols-2 justify-between  gap-5 mb-10">
        <input
          className="bg-transparent outline-none pb-5 placeholder:text-lg text-[#A0A2A7] border-b border-slate-300"
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <input
          className="bg-transparent outline-none pb-5 placeholder:text-lg text-[#A0A2A7] border-b border-slate-300"
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
      </div>
      <div className="grid grid-cols-2 justify-between  gap-5 mb-10">
        <input
          className="bg-transparent outline-none pb-5 placeholder:text-lg text-[#A0A2A7] border-b border-slate-300"
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="bg-transparent outline-none pb-5 placeholder:text-lg text-[#A0A2A7] border-b border-slate-300"
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
      </div>

      <div className="grid grid-cols-2 justify-between  gap-5 mb-10">
        <input
          className="bg-transparent outline-none pb-5 placeholder:text-lg text-[#A0A2A7] border-b border-slate-300"
          type="text"
          placeholder="Loan Amount"
          {...register("loanAmount", { required: true })}
        />
        <input
          className="bg-transparent outline-none pb-5 placeholder:text-lg text-[#A0A2A7] border-b border-slate-300"
          type="text"
          placeholder="Loan Team"
          {...register("loanTeam", { required: true })}
        />
      </div>

      <div className="border-b border-slate-300">
        <input
          className="bg-transparent outline-none pb-5 placeholder:text-lg text-[#A0A2A7] "
          type="text"
          placeholder="Message"
          {...register("message", { required: true })}
        />
      </div>
      <button
        className="px-10 py-[15px] bg-primary-color-2 text-[#292C32]  font-medium border mt-10"
        type="submit"
      >
        Apply Loan
      </button>
    </form>
  );
};
