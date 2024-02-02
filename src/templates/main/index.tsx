import UserMain from "@/components/main/UserMain";
import { Clock } from "@/components/main/Clock";
import { Calendar } from "@/components/main/Calendar";
import { TodoList } from "@/components/main/TodoList";
import WorkingStatus from "@/components/main/WorkingStatus";
import { memberDetails } from "@/mocks/teamList";
import { MemberDetailType } from "@/components/main/types";

const Main = (props: MemberDetailType) => {
  return (
    <div className="nflex ngap-[40px]">
      <UserMain {...props} />
      <div className="nw-[400px] nm-5 nflex nflex-col nitems-center ngap-y-10">
        <Clock />
        <Calendar />
        <TodoList />
      </div>
      <div className="nw-[400px] nmt-5">
        <WorkingStatus members={memberDetails} />
      </div>
    </div>
  );
};

export default Main;
