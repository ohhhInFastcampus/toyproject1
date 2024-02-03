import Main from "@/templates/main";
import {MemberDetailTypes} from "@/components/main/types";
import {getLocalStorage} from "@/utils/settingStorage.ts";
import {useEffect, useState} from "react";
import {getUserList} from "@/utils/userList.ts";

const MainPage = () => {
  const user: MemberDetailTypes = getLocalStorage("user");
  const [userList,setUserList] = useState<MemberDetailTypes[]>([]);
  useEffect(()=>{
    getUserList().then((item)=>{
      setUserList(item)
    })
  },[])
  return (
    <div className="nmt-[40px] nmb-[40px]">
      <Main user={user} working={userList} />;
    </div>
  );
};

export default MainPage;
