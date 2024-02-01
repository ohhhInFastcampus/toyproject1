import { useState } from "react";
import MainJobState from "@/components/main/MainJobState";
import UserDetails from "@/components/main/UserDetails";
import UserTime from "@/components/main/UserTime";
import { UserAvatar } from "@/components/main/UserAvatar";
import WhiteBox from "@/components/main/WhiteBox";
import { memberDetails } from "@/mocks/teamList";

const User = memberDetails[0];

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
          <WhiteBox>이름: {User.name}</WhiteBox>
          <WhiteBox>
            <div className="nmr-10">부서: {User.department}</div>
            <div>직급: {User.role}</div>
          </WhiteBox>
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
