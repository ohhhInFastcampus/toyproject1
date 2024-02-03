import { useState } from 'react';
import img from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import LoginDetail from "@/components/login/LoginDetail";
import {login} from "@/utils/login.ts";
import { useNavigate } from "react-router-dom";
interface reqLoginType {
  id : string,
  password : string,
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
const handleLogin = async () => {
    const loginData: reqLoginType = {
        id: email,
        password: password,
    };
    console.log('Login Data:', loginData);
    await login(loginData).then(()=>{
      navigate("/");
    }).catch((reason)=>{
        if(reason instanceof Error) {
            console.log(reason.message,"reason");
        }

    })
};

  return (
    <Card className="nflex njustify-center">
      <Card className="nw-[450px] npy-[50px] nm-10 nborder-solid nborder-2 nborder-gray-300">
        <CardHeader className="ngrid njustify-items-center">
            <a href={"/"} className={"nblock  nmb-5 nw-[150px]"}>
              <img src={img} alt={"logo"} />
            </a>
        </CardHeader>
        <CardContent className="nmy-4 ngrid njustify-items-center">
          <LoginDetail
            id="email"
            type="email"
            placeholder="아이디:"
            value={email}
            onChange={setEmail}
          />
          <LoginDetail
            id="password"
            type="password"
            placeholder="비밀번호:"
            value={password}
            onChange={setPassword}
          />
        </CardContent>
        <CardFooter className="ngrid njustify-items-center">
          <Button className="nw-60 nmt-2 np-2" onClick={handleLogin}>
            로그인
          </Button>
          <CardDescription className="nmt-3">
          아이디 / 비밀번호 찾기
          </CardDescription>
        </CardFooter>
      </Card>
    </Card>
  );
}

export default Login;

