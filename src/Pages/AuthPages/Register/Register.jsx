import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import useAuth from "../../../Firebase/Hooks/useAuth";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { creatUser,updateUserProfile } = useAuth();
   const location=useLocation();
  const navigate=useNavigate();

  const handleRegister = (data) => {
    //Step-1 Amra Amader from theke image nilam
    const profileImage = data.image[0];

    creatUser(data.email, data.password)
    .then((result) => {
      console.log(result.user);
      navigate(location?.state || '/')

      //Step -2 Image take fromData te convart korte hobe
      const fromData = new FormData();
      fromData.append("image", profileImage);

      //Step-3 imageBB er api Example call er api URL nite hobe ar api key er sathe use korte hobe
      const image_api_key = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host_key
      }`;

      //Step-4 image take imageBB te upload kore sekhan theke then e imgbb er url pailam
      axios.post(image_api_key, fromData).then((res) => {
        console.log("afrer image Upload", res.data.data.display_url);
        const updateUser = {
          displayName: data.name,
          photoURL: res.data.data.url,
        };
        updateUserProfile(updateUser)
        .then(result=>{
          console.log('user profile updated',result)
        })
        .catch(err=>{
          console.log(err)
        })
      });
    });
  };
  return (
    <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-2xl text-center text-secondary font-semibold">
        Wellcome to Zap-Shift
      </h3>
      <p className="font-semibold text-center text-secondary">
        Please Register
      </p>
      <form className="card-body" onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          {/*Email input section */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            {...register("name", { required: true })}
            placeholder="Type your name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-600 font-bold">Type your Name</p>
          )}

          {/*Email input section */}
          <label className="label">Image</label>
          <input
            type="file"
            className="file-input"
            {...register("image", { required: true })}
          />
          {errors.image?.type === "required" && (
            <p className="text-red-600 font-bold">photo is required</p>
          )}

          {/*Email input section */}
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

          {/*Password input section */}
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
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 font-bold">
              clear clParssword must be 1 upercase 1 loawarcase and 1 number
            </p>
          )}
          
          <button className="btn btn-neutral w-full mt-4">Register</button>
        </fieldset>
        <p>
          Already have an Zap-Shift account please !{" "}
          <NavLink
            to={"/login"}
            className={"text-blue-500 font-semibold hover:font-bold underline"}
          >
            Login
          </NavLink>
        </p>
      </form>
      <GoogleLogin />
    </div>
  );
};

export default Register;
