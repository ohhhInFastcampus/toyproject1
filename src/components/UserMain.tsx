import { useState } from "react";
import MainJobState from "@/components/main/MainJobState";
import UserName from "@/components/main/UserName";
import UserDetails from "@/components/main/UserDetails";
import UserTime from "@/components/main/UserTime";
import { UserAvatar } from "@/components/main/UserAvatar";

const UserMain = () => {
  const [switchState, setSwitchState] = useState(false);
  // 스위치 상태 변경 함수
  const handleSwitchChange = (newState: boolean) => {
    setSwitchState(newState);
  };
  return (
    <>
      <div className="nw-[400px]">
        <div className="nflex nflex-col nrounded-3xl nbg-blue-200 np-8 ngap-y-8 ">
          <div className="nself-center ">
            <UserAvatar />
          </div>
          <div>
            <UserName />
          </div>
          <div className="nmb-6">
            <UserDetails />
          </div>
          <div className="nmb-6">
            <MainJobState
              onSwitchChange={handleSwitchChange}
              switchState={switchState}
            />
          </div>
          <div>
            <UserTime />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMain;
