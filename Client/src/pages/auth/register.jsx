import CommonForm from "@/components/common/form";
import { useState } from "react";
import { Link } from "react-router-dom";

// 1. DEFINIMOS LOS CAMPOS DEL FORMULARIO (ESTO FALTABA)
const registerFormControls = [
  {
    name: "userName",
    label: "Username :",
    placeholder: "Enter your username",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email :",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password :",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);

  // 2. FUNCIÓN PARA MANEJAR EL ENVÍO
  function onSubmit(event) {
    
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create a new account
        </h1>
        <p className="mt-2 text-sm text-gray-600">
         Already have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>

      {/* 3. PASAMOS LAS PROPS NECESARIAS AL COMPONENTE */}
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