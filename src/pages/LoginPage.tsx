import Auth, { AuthType } from "../components/auth/Auth";


function LoginPage() {
  return <Auth initialAuthType={AuthType.Login} />;
}

export default LoginPage;