import { useState } from 'react';
import img from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LoginDetail from "@/components/login/LoginDetail";

interface reqLoginType {
  id : string,
  password : string,
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const loginData: reqLoginType = {
      id: email,
      password: password,
    };
    console.log('Login Data:', loginData);
  };

  return (
    <Card className="nflex njustify-center">
      <Card className="nw-[500px] np-5 nm-10 nborder-solid nborder-2 nborder-gray-300">
        <CardHeader className="ngrid njustify-items-center">
            <a href={"/"} className={"nblock nw-40"}>
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
          <Button className="nw-60 np-2" onClick={handleLogin}>
            로그인
          </Button>
        </CardFooter>
        <CardDescription className="ngrid nmb-8 njustify-items-center">
          아이디 / 비밀번호 찾기
        </CardDescription>
      </Card>
    </Card>
  );
}

export default Login;

