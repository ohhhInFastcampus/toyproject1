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
    <Card>
      <CardHeader>
        <CardTitle>
          <a href={"/"} className={"nblock nw-1/12"}>
            <img src={img} alt={"logo"} />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
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
      <CardFooter>
        <Button className="w-full" onClick={handleLogin}>
          로그인
        </Button>
      </CardFooter>
      <CardDescription>아이디/비밀번호 찾기</CardDescription>
    </Card>
  );
}

export default Login;

