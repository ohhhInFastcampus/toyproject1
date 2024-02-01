import { MemberMockType } from "@/components/main/types";

const UserTime = ({ starttime, endtime }: MemberMockType) => {
  return (
    <div>
      <div className="nflex nflex-row njustify-center  nbg-white nrounded-full np-3 nitems-center nfont-semibold">
        <div className="nmr-10">시작 시간: {starttime}</div>
        <div>종료 시간: {endtime}</div>
      </div>
    </div>
  );
};

export default UserTime;
