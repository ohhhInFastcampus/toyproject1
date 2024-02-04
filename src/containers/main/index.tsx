import Main from "@/templates/main";
import {MemberDetailTypes} from "@/components/main/types";
import {getLocalStorage, setJsonToString, setLocalStorage,} from "@/utils/settingStorage.ts";
import {useEffect, useState} from "react";
import {getUserList} from "@/utils/userList.ts";
import {editWorkingState} from "@/utils/workingState.ts";
import {parsingDateToString} from "@/utils/parsingDate.ts";

const MainPage = () => {
  const [user,setUser] = useState<MemberDetailTypes>(getLocalStorage("user"));
  const [userList,setUserList] = useState<MemberDetailTypes[]>([]);
  const [switchState, setSwitchState] = useState(false);
  // 스위치 상태 변경 함수
  const handleSwitchChange = (newState: boolean) => {
    setSwitchState(newState);
  };
  const settingWorkingStatus = () => {
    if(switchState) {
      // 시작시간 세팅
      editWorkingState({
        startWorking: parsingDateToString(new Date()),
        endWorking : parsingDateToString(new Date("1999-01-01 00:00:00")),
        email: user.email
      }).then((res)=>{
        let newUser:MemberDetailTypes = {...user};
        newUser.startTime = res.startWorking;
        newUser.endTime = res.endWorking;
        setLocalStorage('user',setJsonToString(newUser));
        setUser(newUser)
      })
    } else {
      // 끝난시간 세팅
      editWorkingState({
        startWorking: user.startTime,
        endWorking : parsingDateToString(new Date()),
        email: user.email
      }).then((res)=>{
        let newUser:MemberDetailTypes = {...user};
        newUser.startTime = res.startWorking;
        newUser.endTime = res.endWorking;
        setLocalStorage('user',setJsonToString(newUser));
        setUser(newUser);
      })
    }
  }
  useEffect(()=>{
    getUserList().then((item)=>{
      setUserList(item)
    })
  },[])
  return (
    <div className="nmt-[40px] nmb-[40px]">
      <Main user={user} working={userList} switchState={switchState}   handleSwitchChange={handleSwitchChange} settingWorkingStatus={settingWorkingStatus}/>;
    </div>
  );
};

export default MainPage;
