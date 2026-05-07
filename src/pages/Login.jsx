import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../features/auth/authSlice";
import { useState } from "react";
import { Button } from "../components/ui/Button";
import NewsletterBox from "../components/common/NewsletterBox";
import InputField from "../components/formElements/InputField";
import { loginSchema, registerSchema } from "../features/auth/authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //   const { accessToken } = useSelector((s) => s.auth);

  // console.log(accessToken, "accessToken");

  const [currentState, setCurrentState] = useState("Login");

  const isLogin = currentState === "Login";

  const methods = useForm({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
    defaultValues: { name: "", email: "", password: "" },
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = async (data) => {
    if (isLogin) {
      await dispatch(loginUser(data)).unwrap();
      navigate("/");
      reset();
    } else {
      await dispatch(registerUser(data)).unwrap();
      toast.success("User registered successfully ✅");
      reset();
      setCurrentState("Login");
    }
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {!isLogin && (
          <InputField
            placeholder="Name"
            {...register("name")}
            error={errors.name?.message}
            type="text"
            required
            name="name"
          />
        )}

        <InputField
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message}
          type="email"
          required
          name="email"
        />

        <InputField
          placeholder="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
          name="password"
        />

        <div className="w-full flex justify-between text-sm -mt-2">
          <p className="cursor-pointer">Forgot your password</p>

          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer"
            >
              Create acoount
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer"
            >
              Login Here
            </p>
          )}
        </div>

        <Button variant="solid" type="submit">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </Button>
      </form>
      <div className="mt-9 sm:mt-14">
        <NewsletterBox />
      </div>
    </main>
  );
};

export default Login;
