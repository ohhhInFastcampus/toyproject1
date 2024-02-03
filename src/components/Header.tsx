import img from "@/assets/logo.png";
import { UserHeader } from "./main/UserHeader";
import {MemberDetailTypes} from "@/components/main/types.ts";
import {getLocalStorage} from "@/utils/settingStorage.ts";

interface GnbListType {
  title: string;
  link: string;
}

const Logo = () => {
  return (
    <a href={"/"} className={"nblock nw-1/12"}>
      <img src={img} alt={"logo"} />
    </a>
  );
};
const Gnb = () => {
  //TODO 라우터 생성시 link 부분 수정
  const gnbList: GnbListType[] = [
    {
      title: "부재신청",
      link: "absenceRequest",
    },
    {
      title: "갤러리",
      link: "gallery",
    },
    {
      title: "부재신청내역",
      link: "absenceRequestDetails",
    },
  ];
  return (
    <ul className="nflex ngap-1">
      {gnbList.map((item) => {
        return (
          <li
            className={
              "nflex nalign-center njustify-center nfont-bold ntext-base"
            }
            key={item.title}
          >
            {/*호버 시 백그라운드 색상 변화도록 추가*/}
            <a
              className={`nflex items-center njustify-center np-3 nrounded-xl ntransition hover:nbg-black hover:ntext-white`}
              href={item.link}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const User = (user: MemberDetailTypes) => {
  //TODO 컴포넌트는 데이터 연결 시 컴포넌트 생성 예정
  return (
    <div>
      <UserHeader {...user}/>
    </div>
  );
};

const Header = () => {
  const user: MemberDetailTypes = getLocalStorage("user");
  return (
    <header
      className={
        "nw-full nh-20 nborder-b-1 nborder-blue-300 nflex nitems-center njustify-between"
      }
    >
      <Logo />
      <Gnb />
      <User {...user}/>
    </header>
  );
};
export default Header;
