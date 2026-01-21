import CommonForm from "@/components/common/form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "@/store/auth-slice";
import { toast } from "sonner"; 

const registerFormControls = [
  { name: "userName", label: "User Name", placeholder: "Enter your user name", componentType: "input", type: "text" },
  { name: "email", label: "Email", placeholder: "Enter your email", componentType: "input", type: "email" },
  { name: "password", label: "Password", placeholder: "Enter your password", componentType: "input", type: "password" },
];

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(registerUser(formData)).then((data) => {
      // data.payload contiene la respuesta JSON de tu backend
      if (data?.payload?.success) {
        // Muestra mensaje verde de éxito
        toast.success(data?.payload?.message);

        // Esperamos un segundo para que el usuario lea el mensaje antes de moverlo
        setTimeout(() => {
          navigate("/auth/login");
        }, 1500);
      } else {
        // Muestra mensaje rojo con el error del backend (ej: "User already exists")
        toast.error(data?.payload?.message || "Registration failed");
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2 text-muted-foreground">
          Already have an account?
          <Link className="font-medium ml-2 text-primary hover:underline" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;