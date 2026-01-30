import Auth from "../components/auth/Auth";

enum AuthType {
  Login = "login",
  SignUp = "signup",
}

function SignupPage() {
  return <Auth initialAuthType={AuthType.SignUp} />;
}

export default SignupPage;