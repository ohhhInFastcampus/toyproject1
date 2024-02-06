import Login from "@/templates/login";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {login} from "@/utils/login.ts";
import {reqLoginType} from "@/templates/login/type.ts";
import LoginModal from "@/components/login/LoginModal";
import {useRecoilState} from "recoil";
import {userAtom} from "@/store/userAtom.ts";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [_, setUser] = useRecoilState(userAtom);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const loginData: reqLoginType = {
            id: email,
            password: password,
        };
        await login(loginData).then((res) => {
            setError("");
            setUser(res);
            navigate("/");
        }).catch((reason) => {
                if (reason instanceof Error) {
                    setError(reason.message)
                }

            }
        )
    };
    const openModal = () => {
        setShowModal(true);
        console.log('open')
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
    return (
        <>
        <Login handleLogin={handleLogin} error={error} email={email} setEmail={setEmail} setPassword={setPassword} password={password}  openModal={openModal} closeModal={closeModal} />
        {showModal ? <LoginModal open={true} onClose={closeModal} /> : null}
        </>
    )
}
export default LoginPage;