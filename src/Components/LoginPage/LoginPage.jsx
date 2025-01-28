import Hero from "../Hero/Hero";
import LoginForm from "../LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className="flex h-dvh">
      <LoginForm />
      <Hero />
    </div>
  );
}

export default LoginPage;
