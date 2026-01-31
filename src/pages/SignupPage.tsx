import Auth, { AuthType } from "../components/auth/Auth";


function SignupPage() {
  return <Auth initialAuthType={AuthType.SignUp} />;
}

export default SignupPage;