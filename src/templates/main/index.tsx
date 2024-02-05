import UserMain from "@/components/main/UserMain";
import { Clock } from "@/components/main/Clock";
import { Calendar } from "@/components/main/Calendar";
import { TodoList } from "@/components/main/TodoList";
import WorkingStatus from "@/components/main/WorkingStatus";
import { MemberDetailType, MemberDetailTypes } from "@/components/main/types";
import React from "react";

interface MainPageType {
  user: MemberDetailType;
  working: MemberDetailTypes[];
  handleSwitchChange: (checked: boolean) => void;
  switchState: boolean;
  settingWorkingStatus: () => void;
  changeImage: (e: React.ChangeEvent<HTMLInputElement>) => Promise<string>;
}
const Main = ({
  user,
  working,
  handleSwitchChange,
  switchState,
  settingWorkingStatus,
  changeImage,
}: MainPageType) => {
  return (
    <div className="nflex ngap-[40px] nw-fit nm-auto np-10">
      <UserMain
        user={user}
        handleSwitchChange={handleSwitchChange}
        changeImage={changeImage}
        switchState={switchState}
        settingWorkingStatus={settingWorkingStatus}
      />
      <div className="nw-[400px] nm-5 nflex nflex-col nitems-center ngap-y-10">
        <Clock />
        <Calendar />
        <TodoList />
      </div>
      <div className="nw-[400px] nmt-5">
        <WorkingStatus members={working} />
      </div>
    </div>
  );
};

export default Main;
