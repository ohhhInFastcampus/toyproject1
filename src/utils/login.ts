import {getDoc, doc} from "firebase/firestore";
import {db} from "@/Firebase.ts";
import {reqLoginType} from "@/templates/login/type.ts";
import {setJsonToString, setLocalStorage} from "@/utils/settingStorage.ts";
import {MemberDetailType, MemberDetailTypes} from "@/components/main/types.ts";
import {getWorkingState} from "@/utils/workingState.ts";

export const login = async ({id, password}:reqLoginType) => {
    if(id.length === 0) {
        throw new Error("아이디를 입력해주세요.");
    }
    if(password.length === 0) {
        throw new Error("비밀번호를 입력해주세요.");
    }
    const searchUser = doc(db, "user", id);
    const result = await getDoc(searchUser);
    const data = result.data();
    if(data !== undefined) {
        const workingState = await getWorkingState(id);
        let obj : MemberDetailTypes = {
            ...data as MemberDetailType , email : id
        }
        obj.startTime = workingState.startWorking;
        obj.endTime = workingState.endWorking;
        console.log(obj,"obj")
        setLocalStorage("user",setJsonToString(obj));
        return obj;
    } else {
        throw new Error("유저가 존재하지 않습니다. 관리부서에 문의해주세요.");
    }
}


// TODO if layout

// const [error, setError] = useState("");

// const handleLogin = async () => {
//     const loginData: reqLoginType = {
//         id: email,
//         password: password,
//     };
//     console.log('Login Data:', loginData);
//     await login(loginData).then(()=>{
//         setError("");
//         redirect("/");
//     }).catch((reason)=>{
//         if(reason instanceof Error) {
//             console.log(reason.message,"reason");
//             setError(reason.message)
//         }
//
//     })
// };