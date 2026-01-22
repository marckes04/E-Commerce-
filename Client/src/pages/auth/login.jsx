import CommonForm from "@/components/common/form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "@/store/auth-slice";
import { toast } from "sonner";

const loginFormControls = [
  { name: "email", label: "Email", placeholder: "Insert your email", componentType: "input", type: "email" },
  { name: "password", label: "Password", placeholder: "Insert your password", componentType: "input", type: "password" },
];

const initialState = { email: "", password: "" };

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data.payload.message || "Logged in successfully!");
        // NO usamos navigate("/") aquí. 
        // El cambio en isAuthenticated en Redux hará que CheckAuth te redireccione.
      } else {
        toast.error(data?.payload?.message || "Invalid credentials");
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Don't have an account?
          <Link className="font-medium ml-2 text-primary hover:underline" to="/auth/register">
            Sign up
          </Link>
        </p>
      </div>

      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;