import { useForm, useWatch } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import useAuth from "../../../Firebase/Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();
  const email = useWatch({control , name: "email" });

  const { loginUser, ResetPassword } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handlelogIn = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        navigate(location?.state || "/");
        toast.success("Successfully Login", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  const handleReset = () => {
    if (!email) {
      toast.error("please enter your email");
      return;
    }

    ResetPassword(email)
      .then(() => {
        toast.success("Please Check Your Mail");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full md:w-120 max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-2xl text-center text-secondary font-semibold">
        Wellcome Back
      </h3>
      <p className="font-semibold text-center text-secondary">Please Login</p>
      <form className="card-body" onSubmit={handleSubmit(handlelogIn)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            name="email"
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
            <p className="text-red-600 font-bold">Password not meatch</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 font-bold">Password not metched</p>
          )}

          <div>
            <button
              onClick={handleReset}
              className="link text-blue-600 font-bold hover:underline link-hover"
            >
              Forgot password?
            </button>
          </div>
          <button className="btn btn-neutral w-full mt-4">Login</button>
        </fieldset>
        <p>
          If you new to Zap-Shift please !{" "}
          <NavLink
            state={location?.state || "/"}
            to={"/register"}
            className={"text-blue-500 font-semibold hover:font-bold underline"}
          >
            Register
          </NavLink>
        </p>
      </form>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;
