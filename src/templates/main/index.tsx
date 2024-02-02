import UserMain from "@/components/main/UserMain";
import { Clock } from "@/components/main/Clock";
import { Calendar } from "@/components/main/Calendar";
import { TodoList } from "@/components/main/TodoList";
import WorkingStatus from "@/components/main/WorkingStatus";
import { MemberDetailType } from "@/components/main/types";

interface MainPageType {
  user: MemberDetailType;
  working: MemberDetailType[];
}
const Main = ({ user, working }: MainPageType) => {
  return (
    <div className="nflex ngap-[40px]">
      <UserMain {...user} />
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
