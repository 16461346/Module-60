import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log("after data ", data);
  };
  return (
    <div className="w-100 pl-20">
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600 font-bold">Type your email</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/,
            })}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600 font-bold">Please type password</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600 font-bold">
              Password must be 6 carecter
            </p>
          )}
          {
            errors.password?.type==="pattern" &&(
                <p className="text-red-500 font-bold">clear
                clParssword must be 1 upercase 1 loawarcase and 1 number</p>
            )
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
