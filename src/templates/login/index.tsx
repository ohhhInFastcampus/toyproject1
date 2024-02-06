import img from "@/assets/logo.png";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import LoginDetail from "@/components/login/LoginDetail";
import React from "react";

interface LoginPropsType {
    handleLogin: () => Promise<void>,
    email: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    error : string
    openModal: () => void, // Add openModal function to props
    closeModal: () => void //
}

function Login({handleLogin, email, password, setEmail, setPassword,error,openModal}: LoginPropsType) {


    return (
        <Card className="nflex njustify-center nmt-[100px]">
            <Card className="nw-[500px] npy-[80px] nm-10 nbg-slate-30 nborder-solid nborder-1 nborder-gray-300 nshadow-xl ">
                <CardHeader className="ngrid njustify-items-center">
                    <a href={"/"} className={"nblock  nmb-5 nw-[150px]"}>
                        <img src={img} alt={"logo"}/>
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
                    <div className={'ntext-red-600'}>{error}</div>
                </CardContent>
                <CardFooter className="ngrid njustify-items-center">
                    <Button className="nw-60 nmt-2 np-2" onClick={handleLogin}>
                        로그인
                    </Button>
                    <CardDescription className="nmt-3">
                        <button onClick={openModal}>아이디 / 비밀번호 찾기</button>
                    </CardDescription>
                </CardFooter>
            </Card>
        </Card>
    );
}

export default Login;

