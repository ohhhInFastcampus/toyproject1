import UserMain from "@/components/main/UserMain";
import { Clock } from "@/components/main/Clock";
import { Calendar } from "@/components/main/Calendar";
import { TodoList } from "@/components/main/TodoList";
import WorkingStatus from "@/components/main/WorkingStatus";
import { memberDetails } from "@/mocks/teamList";
import {getUserList} from "@/utils/GetUserList.ts";

const Main = () => {
    getUserList()
  return (
    <div className="nflex ngap-[20px]">
      <UserMain
        profile={""}
        name={""}
        department={""}
        role={""}
        isWorking={"working"}
        startTime={""}
        endTime={""}
      />
      <div className="nw-[400px] nm-5 nflex nflex-col nitems-center ngap-y-10">
        <Clock />
        <Calendar />
        <TodoList />
      </div>
      <div className="nw-[400px] nm-5 nflex njustify-center">
        <WorkingStatus members={memberDetails} />
      </div>
    </div>
  );
};

export default Main;
