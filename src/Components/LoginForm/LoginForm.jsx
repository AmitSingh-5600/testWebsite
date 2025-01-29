import EmployeeFooter from "../EmployeeFooter/EmployeeFooter";
import Logo from "../Logo/Logo";
import Input from "../Input/input";

function LoginForm() {
  return (
    <div className="flex-2 p-8 box-border flex flex-col justify-between">
      <Logo />
      <div className="w-5/6 mx-auto p-8 bg-slate-200">
        <h2 className="text-3xl font-bold">Log in</h2>
        <p className="text-[#969696]">
          Please log in to continue using your account
        </p>
        <form>
          <Input
            type="mail "
            legend="Email ID/ Phone Number"
            placeHolder="Enter your Mail ID"
          />
          <Input
            type="mail "
            legend="Email ID/ Phone Number"
            placeHolder="Enter your Mail ID"
          />
          <p>
            <span>
              <input type="checkbox" />
            </span>
            Keep me logged in
          </p>
          <div className="bg-[#28819C] p-3 ">
            <button type="submit">Log In</button>
          </div>
          <a>Forgot Password</a>
          <div>
            <hr />
            Or
            <hr />
          </div>
        </form>
        <button>Log in with Google</button>
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
