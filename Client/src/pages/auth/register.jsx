import { Link } from "react-router-dom"; // <--- ESTO FALTABA

function AuthRegister() {
    return ( 
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create a new account</h1>
                <p className="mt-2">Already have an account</p>
                
                {/* Corregido: "font.me" -> "font-medium" y agregué color */}
                <Link className="font-medium ml-2 text-primary hover:underline" to='/auth/login'>
                    Login
                </Link>
            </div>
        </div> 
    );
}

export default AuthRegister;