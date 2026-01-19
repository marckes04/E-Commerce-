import CommonForm from "@/components/common/form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // <--- ADDED useNavigate
import { registerUser } from "@/store/auth-slice"; // <--- ADDED registerUser Import

// 1. FORM FIELDS
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 2. HANDLE SUBMIT
  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
        // Optional: Check if registration was successful before redirecting
        if(data?.payload?.success){
             navigate('/auth/login');
        } else {
            // For now, let's just log the result
            console.log("Registration attempt:", data);
            // You might want to redirect anyway for testing:
            // navigate('/auth/login'); 
        }
    });
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