import MainJobState from "@/components/main/MainJobState";
import { UserAvatar } from "@/components/main/UserAvatar";
import WhiteBox from "@/components/main/WhiteBox";
import { MemberDetailType } from "./types";
interface userMainPropsType {
  user : MemberDetailType,
  handleSwitchChange :  (checked: boolean) => void,
  switchState : boolean
}
const UserMain = ({user,handleSwitchChange,switchState}: userMainPropsType) => {

  return (
    <>
      <div className="nw-[400px]">
        <div className="nflex nflex-col nrounded-3xl nbg-blue-200 np-8 ngap-y-8 nshadow-md nborder-2">
          <div className="nself-center ">
            <UserAvatar {...user} />
          </div>
          <WhiteBox className="">이름: {user.name}</WhiteBox>
          <WhiteBox className="nmb-6">
            <div className="nmr-10">부서: {user.department}</div>
            <div>직급: {user.role}</div>
          </WhiteBox>
          <div className="nmb-6">
            <MainJobState
              onSwitchChange={handleSwitchChange}
              switchState={switchState}
            />
          </div>
          <WhiteBox>
            <div className="nmr-10">시작 시간: {user.startTime}</div>
            <div>종료 시간: {user.endTime}</div>
          </WhiteBox>
        </div>
      </div>
    </>
  );
};

export default UserMain;
