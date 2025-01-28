import image from "../../assets/images/image.png";
import Logo from "../../assets/logo/image.png";

function LoginPage() {
  return (
    <div className="flex h-dvh">
      <div className="flex-1">
        <div className="">
          <img src={Logo} className="h-8"></img>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">Log in</h2>
          <p>Please log in to continue using your account</p>
          <form>
            <fieldset className="">
              <legend>Email ID/ Phone Number</legend>
              <input type="text" className="border border-black" />
            </fieldset>
            <fieldset>
              <legend>Password</legend>
              <input type="text" className="border border black" />
            </fieldset>
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
        </div>
      </div>
      <div className="bg-[#28819c] flex-2">
        <div className=" mx-auto">
          <img src={image} className="h-80" />
        </div>
        <h1 className="">We Make Sure it Works</h1>
      </div>
    </div>
  );
}

export default LoginPage;
