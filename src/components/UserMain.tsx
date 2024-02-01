import { useState } from "react";
import MainJobState from "@/components/main/MainJobState";
import UserName from "@/components/main/UserName";
import UserDetails from "@/components/main/UserDetails";
import UserTime from "@/components/main/UserTime";
import { UserAvatar } from "@/components/main/UserAvatar";
import { TodoList } from "@/components/main/TodoList";
import {UserHeader} from "@/components/main/UserHeader";

const UserMain = () => {
  const [switchState, setSwitchState] = useState(false);
  // 스위치 상태 변경 함수
  const handleSwitchChange = (newState: boolean) => {
    setSwitchState(newState);
  };
  return (
    <div>
      <UserAvatar />
      <UserName />
      <UserDetails />
      <MainJobState
        onSwitchChange={handleSwitchChange}
        switchState={switchState}
      />
      <UserTime />
      <TodoList />
    </div>
  );
};

export default UserMain;
