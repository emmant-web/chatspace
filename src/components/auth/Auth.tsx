import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";
import { useChatStore } from "../../store/chatStore";
import Logo from "../../assets/images/logo-v1.svg";

export enum AuthType {
  Login = "login",
  SignUp = "signup",
}

interface AuthFormData {
  email: string;
  password: string;
}

interface AuthProps {
  initialAuthType?: AuthType;
}

function Auth({ initialAuthType = AuthType.SignUp }: AuthProps) {
  const [authType, setAuthType] = useState<AuthType>(initialAuthType);
  const [authErrorMessage, setAuthErrorMessage] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const setUser = useChatStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  const onSubmit = async (data: AuthFormData) => {
    // Clear any previous error messages
    setAuthErrorMessage(null);

    // To check if you are in login mode
    if (authType === AuthType.Login) {
      // LOGIN FLOW
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        // Login failed - show error
        setAuthErrorMessage(error.message);
      } else if (authData.user) {
        // Login succeeded - save user and go to dashboard
        setUser({
          id: authData.user.id,
          email: authData.user.email || "",
        });
        navigate("/dashboard");
      }
    } else {
      // SIGNUP FLOW
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) {
        // Signup failed - show error
        setAuthErrorMessage(error.message);
      } else {
        // Signup succeeded - tell user to check email
        alert("Sign up successful! Please check your email for confirmation.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2 mb-8 hover:opacity-80 transition-opacity"
        >
          <img className="w-10 h-10" src={Logo} alt="chatspace logo" />
          <span className="text-h3 text-foreground">chatspace</span>
        </Link>

        {/* Auth Card */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <h2 className="text-h3 text-foreground mb-6 text-center">
            {authType === AuthType.Login
              ? "Welcome back!"
              : "Create your account"}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-body text-foreground block"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg text-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                placeholder="you@example.com"
                {...register("email", { required: "Email is required." })}
              />
              {errors.email && (
                <p className="text-small text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-body text-foreground block"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg text-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                placeholder="••••••••"
                {...register("password", { required: "Password is required." })}
              />
              {errors.password && (
                <p className="text-small text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Error Message */}
            {authErrorMessage && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <p className="text-small text-destructive">
                  {authErrorMessage}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-rectangle-filled w-full text-button text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {authType === AuthType.Login ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Toggle Auth Type */}
          <div className="mt-6 text-center">
            {authType === AuthType.Login ? (
              <p className="text-body text-muted-foreground">
                Don't have an account?{" "}
                <button
                  onClick={() => setAuthType(AuthType.SignUp)}
                  className="text-primary hover:underline font-medium"
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p className="text-body text-muted-foreground">
                Already have an account?{" "}
                <button
                  onClick={() => setAuthType(AuthType.Login)}
                  className="text-primary hover:underline font-medium"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-small text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;
