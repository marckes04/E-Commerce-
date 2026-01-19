import CommonForm from "@/components/common/form";
import { useState } from "react";
import { Link } from "react-router-dom";

// 1. DEFINIMOS LOS CAMPOS DEL LOGIN (Solo Email y Password)
const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Insert your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Insert your password",
    componentType: "input",
    type: "password",
  },
];

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  // 2. FUNCIÓN PARA MANEJAR EL ENVÍO (Login)
  function onSubmit(event) {
    event.preventDefault();
    console.log("Datos del login:", formData);
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
        </h1>
        <p className="mt-2 text-sm text-gray-600">
            Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Sign up
          </Link>
        </p>
      </div>

      {/* 3. FORMULARIO REUTILIZABLE */}
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Register"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;