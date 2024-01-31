import { useState } from 'react';
import img from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

interface reqLoginType {
  id : string,
  password : string,
}

interface resLoginType {
  token : string,
  refreshToken : string,
  startDate : string,
  expiredDate : string
}

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = () => {
    // Create a login request object
    const loginData: reqLoginType = {
      id: email,
      password: password,
    };

    console.log('Login Data:', loginData);
  };


  return (
    <Card>
  <CardHeader>
    <CardTitle><a href={"/"} className={"nblock nw-1/12"}>
            <img src={img} alt={"logo"}/>
        </a></CardTitle>
    
  </CardHeader>
  <CardContent>
    <div className="grid gap-2">
      {/* <Label htmlFor="email">Email</Label> */}
      <Input
        id="email"
        type="email"
        placeholder="아이디:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="grid gap-2">
      {/* <Label htmlFor="password">Password</Label> */}
      <Input
        id="password"
        type="password"
        placeholder="비밀번호:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
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