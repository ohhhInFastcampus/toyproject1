import { useState } from "react";
import MainJobState from "@/components/main/MainJobState";
import { UserAvatar } from "@/components/main/UserAvatar";
import WhiteBox from "@/components/main/WhiteBox";
import { memberDetails } from "@/mocks/teamList";
import { MemberDetailType } from "./types";

//작업후 삭제예정
const User: MemberDetailType = memberDetails[0];

const UserMain = ({
  name,
  department,
  role,
  startTime,
  endTime,
}: MemberDetailType) => {
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
            <UserAvatar {...User} />
          </div>
          <WhiteBox className="">이름: {name}</WhiteBox>
          <WhiteBox className="nmb-6">
            <div className="nmr-10">부서: {department}</div>
            <div>직급: {role}</div>
          </WhiteBox>
          <div className="nmb-6">
            <MainJobState
              onSwitchChange={handleSwitchChange}
              switchState={switchState}
            />
          </div>
          <WhiteBox>
            <div className="nmr-10">시작 시간: {startTime}</div>
            <div>종료 시간: {endTime}</div>
          </WhiteBox>
        </div>
      </div>
    </>
  );
};

export default UserMain;
