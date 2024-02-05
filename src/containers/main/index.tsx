import Main from "@/templates/main";
import {MemberDetailTypes} from "@/components/main/types";
import {getLocalStorage, setJsonToString, setLocalStorage,} from "@/utils/settingStorage.ts";
import React, {useEffect, useState} from "react";
import {getUserList} from "@/utils/userList.ts";
import {editWorkingState} from "@/utils/workingState.ts";
import {parsingDateToString} from "@/utils/parsingDate.ts";
import {settingUserImage} from "@/utils/settingImage.ts";
const MainPage = () => {
  const storage = getLocalStorage("user");
  const [user,setUser] = useState<MemberDetailTypes>(storage);
  const [userList,setUserList] = useState<MemberDetailTypes[]>([]);
  const [switchState, setSwitchState] = useState(storage.isWorking);
  const changeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const response = await settingUserImage(e);
    console.log(response,"response");
    let newUser = user;
    newUser.profile = response!;
    setUser(newUser);
    setLocalStorage('user',setJsonToString(newUser));
    return newUser.profile;
  }
  // 스위치 상태 변경 함수
  const handleSwitchChange = (newState: boolean) => {
    setSwitchState(newState);
  };
  const getUser = async () => {
    const response = await getUserList();
    setUserList(response);
  }
  const settingWorkingStatus = async () => {
    if(switchState) {
      // 시작시간 세팅
      const response = await editWorkingState({
        startWorking: parsingDateToString(new Date()),
        endWorking : parsingDateToString(new Date("1999-01-01 00:00:00")),
        email: user.email,
        isWorking :switchState
      })
      let newUser:MemberDetailTypes = {...user};
      newUser.startTime = response.startWorking;
      newUser.endTime = response.endWorking;
      newUser.isWorking = switchState;
      setLocalStorage('user',setJsonToString(newUser));
      setUser(newUser)
      await getUser();
    } else {
      // 끝난시간 세팅
      const response = await editWorkingState({
        startWorking: user.startTime,
        endWorking : parsingDateToString(new Date()),
        email: user.email,
        isWorking :switchState
      })
      let newUser:MemberDetailTypes = {...user};
      newUser.startTime = response.startWorking;
      newUser.endTime = response.endWorking;
      newUser.isWorking = switchState;
      setLocalStorage('user',setJsonToString(newUser));
      setUser(newUser);
      await getUser();
    }
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <div className="nmt-[40px] nmb-[40px]">
      <Main user={user} working={userList} switchState={switchState} changeImage={changeImage} handleSwitchChange={handleSwitchChange} settingWorkingStatus={settingWorkingStatus}/>
    </div>
  );
};

export default MainPage;
