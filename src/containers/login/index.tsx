import Login from "@/templates/login";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {login} from "@/utils/login.ts";
import {reqLoginType} from "@/templates/login/type.ts";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const loginData: reqLoginType = {
            id: email,
            password: password,
        };
        await login(loginData).then(() => {
            setError("");
            navigate("/");
        }).catch((reason) => {
                if (reason instanceof Error) {
                    setError(reason.message)
                }

            }
        )
    };
    return (
        <Login handleLogin={handleLogin} email={email} setEmail={setEmail} setPassword={setPassword} password={password} />
    )
}
export default LoginPage;