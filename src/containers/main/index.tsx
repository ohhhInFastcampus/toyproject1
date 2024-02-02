import Main from "@/templates/main";
import { memberDetails } from "@/mocks/teamList";
import { MemberDetailType } from "@/components/main/types";

const MainPage = () => {
  const userData: MemberDetailType = memberDetails[0];
  const userList: MemberDetailType[] = memberDetails;
  return (
    <div className="nmt-[40px] nmb-[40px]">
      <Main user={userData} working={userList} />;
    </div>
  );
};

export default MainPage;
