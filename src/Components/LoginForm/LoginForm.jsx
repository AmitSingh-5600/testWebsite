import Logo from "../Logo/Logo";

function LoginForm() {
  return (
    <div className="flex-2 p-4 flex flex-col justify-between">
      <Logo />
      <div className="w-5/6 mx-auto p-8 bg-slate-200">
        <h2 className="text-3xl font-bold p">Log in</h2>
        <p>Please log in to continue using your account</p>
        <form>
          <legend>Email ID/ Phone Number</legend>
          <input type="text" className="border border-black" />
          <legend>Password</legend>
          <input type="text" className="border border black" />
          <p>
            <span>
              <input type="checkbox" />
            </span>{" "}
            Keep me logged in
          </p>
          <div className="bg-blue-600 px-8">
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
      <p className="text-center">
        Are You an Employer?
        <a href="#" className="text-[#367AFF] underline">
          Login
        </a>
      </p>
    </div>
  );
}

export default LoginForm;
