import img from "@/assets/logo.png";
import { UserHeader } from "./main/UserHeader";
import {MemberDetailTypes} from "@/components/main/types.ts";
import {deleteLocalStorage} from "@/utils/settingStorage.ts";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {userAtom} from "@/store/userAtom.ts";

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
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();
  return (
    <header
      className={
        "nw-full nh-20 nborder-b-1 nborder-blue-300 nflex nitems-center njustify-between np-10"
      }
    >
      <Logo />
      <Gnb />
      <div className={'nflex njustify-center nitems-center ngap-2'}>
        <User {...user}/>
        <Button onClick={()=>{deleteLocalStorage('user'); navigate('/login')}}>로그아웃</Button>
      </div>
    </header>
  );
};
export default Header;
