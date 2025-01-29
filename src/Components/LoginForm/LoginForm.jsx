import EmployeeFooter from "../EmployeeFooter/EmployeeFooter";
import Logo from "../Logo/Logo";
import Input from "../Input/input";
import { FcGoogle } from "react-icons/fc";

function LoginForm() {
  return (
    <div className="flex-2 p-8 box-border flex flex-col justify-between">
      <Logo />
      <div className="w-5/6 mx-auto p-8 flex-col">
        <h2 className="text-3xl font-bold">Log in</h2>
        <p className="text-[#969696]">
          Please log in to continue using your account
        </p>
        <form className="my-4">
          <div className="my-4">
            <Input
              type="mail "
              legend="Email ID/ Phone Number"
              placeHolder="Enter your Mail ID"
            />
          </div>
          <div className="my-4">
            <Input
              type="password "
              legend="Password"
              placeHolder="Enter your Password"
            />
          </div>
          <p className="my-4 flex items-center">
            <span className="mr-2">
              <input type="checkbox" />
            </span>
            Keep me logged in
          </p>
          <div className="bg-[#28819C] p-2 my-2">
            <button type="submit" className="w-full">
              Log In
            </button>
          </div>

          <a className="block text-end text-xs text-[#367AFF]">
            Forgot Password?
          </a>

          <div className="my-4 relative">
            <hr />
            <p className="text-center absolute -top-3 left-4/10 bg-white w-15 ">
              Or
            </p>
          </div>
        </form>
        <button className="flex p-1 border border-[#969696] items-center gap-2 w-full justify-center my-8">
          <p>Log in with Google</p>
          <FcGoogle />
        </button>
        <p className="text-center">
          Need to create an account?{" "}
          <a href="#" className="text-[#367AFF] underline">
            Sign Up
          </a>
        </p>
      </div>
      <EmployeeFooter />
    </div>
  );
}

export default LoginForm;
