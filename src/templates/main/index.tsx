import UserMain from "@/components/UserMain";
import { Calendar } from "@/components/main/Calendar";
import { Clock } from "@/components/main/Clock";
import { TodoList } from "@/components/main/TodoList";
import WorkingStatus from "@/components/main/WorkingStatus";

const Main = () => {
  return (
    <div className="nflex ngap-[20px] ">
      <UserMain />
      <div className="nw-[400px] nm-5 nflex nflex-col nitems-center ngap-y-10">
        <Clock />
        <Calendar />
        <TodoList />
      </div>
      <div className="nw-[400px] nm-5 nflex njustify-center">
        <WorkingStatus />
      </div>
    </div>
  );
};

export default Main;
