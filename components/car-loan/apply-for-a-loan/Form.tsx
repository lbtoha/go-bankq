"use client";
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
      <div className="grid-cols-2 justify-between gap-5 md:mb-10 md:grid">
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-neutral-color-neutral-500 outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-neutral-color-neutral-500 outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
      </div>
      <div className="grid-cols-2 justify-between gap-5  md:mb-10 md:grid">
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-neutral-color-neutral-500 outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-neutral-color-neutral-500 outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
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
          className="border-b border-slate-300 bg-transparent pb-5 text-neutral-color-neutral-500 outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="text"
          placeholder="Loan Amount"
          {...register("loanAmount", { required: true })}
        />
        <input
          className="border-b border-slate-300 bg-transparent pb-5 text-neutral-color-neutral-500 outline-none placeholder:text-lg max-md:mb-5 max-md:w-full"
          type="text"
          placeholder="Loan Team"
          {...register("loanTeam", { required: true })}
        />
      </div>

      <div className="border-b border-slate-300">
        <input
          className="bg-transparent pb-5  text-neutral-color-neutral-500 outline-none placeholder:text-lg max-md:w-full "
          type="text"
          placeholder="Message"
          {...register("message", { required: true })}
        />
      </div>
      <button
        className="mt-10 border bg-primary-color-2 px-10  py-[15px] font-medium text-neutral-color-neutral-800"
        type="submit"
      >
        Apply Loan
      </button>
    </form>
  );
};
