import Main from "@/templates/main";
import { memberDetails } from "@/mocks/teamList";
import {MemberDetailType, MemberDetailTypes} from "@/components/main/types";
import {getLocalStorage} from "@/utils/settingStorage.ts";

const MainPage = () => {
  const user: MemberDetailTypes = getLocalStorage("user");
  const userList: MemberDetailType[] = memberDetails;
  return (
    <div className="nmt-[40px] nmb-[40px]">
      <Main user={user} working={userList} />;
    </div>
  );
};

export default MainPage;
