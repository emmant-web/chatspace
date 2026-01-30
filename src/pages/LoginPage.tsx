import Auth from "../components/auth/Auth";

enum AuthType {
  Login = "login",
  SignUp = "signup",
}

function LoginPage() {
  return <Auth initialAuthType={AuthType.Login} />;
}

export default LoginPage;