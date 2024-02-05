import MainJobState from "@/components/main/MainJobState";
import { UserAvatar } from "@/components/main/UserAvatar";
import WhiteBox from "@/components/main/WhiteBox";
import { MemberDetailType } from "./types";
import {format} from "date-fns";
import React from "react";
interface userMainPropsType {
  user : MemberDetailType,
  handleSwitchChange :  (checked: boolean) => void,
  switchState : boolean,
  settingWorkingStatus : ()=>void,
  changeImage: (e: React.ChangeEvent<HTMLInputElement>) => Promise<string>
}
const UserMain = ({user,handleSwitchChange,switchState,settingWorkingStatus,changeImage}: userMainPropsType) => {

  return (
    <>
      <div className="nw-[400px]">
        <div className="nflex nflex-col nrounded-3xl nbg-blue-200 np-8 ngap-y-8 nshadow-md nborder-2">
          <div className="nself-center ">
            <UserAvatar profile={user} changeImage={changeImage} />
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
             settingWorkingStatus={settingWorkingStatus}/>
          </div>
          <WhiteBox>
            <div className="nmr-10">시작 시간: {format(user.startTime, 'hh:mm')}</div>
            <div>종료 시간: {user.endTime==="1999-01-01 00:00:00" ? "" : format(user.endTime,'hh:mm')}</div>
          </WhiteBox>
        </div>
      </div>
    </>
  );
};

export default UserMain;
