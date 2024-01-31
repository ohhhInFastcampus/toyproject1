import { useState } from "react";
import MainJobState from "@/components/main/MainJobState";
import UserName from "@/components/main/UserName";
import UserDetails from "@/components/main/UserDetails";
import UserTime from "@/components/main/UserTime";
import { UserAvatar } from "@/components/main/UserAvatar";

const Main = () => {
  const [switchState, setSwitchState] = useState(false);
  // 스위치 상태 변경 함수
  const handleSwitchChange = (newState: boolean) => {
    setSwitchState(newState);
  };
  return (
    <>
      <UserAvatar />
      <UserName />
      <UserDetails />
      <MainJobState
        onSwitchChange={handleSwitchChange}
        switchState={switchState}
      />
      <UserTime />
    </>
  );
};

export default Main;
