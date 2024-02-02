import Main from "@/templates/main";
import { MemberDetailType } from "@/components/main/types";

const MainPage = (props: MemberDetailType) => {
  return (
    <div className="nmt-[40px] nmb-[40px]">
      <Main {...props} />;
    </div>
  );
};

export default MainPage;
