import Main from "@/templates/main";
import { MemberDetailType } from "@/components/main/types";

const MainPage = (props: MemberDetailType) => {
  return <Main {...props} />;
};

export default MainPage;
