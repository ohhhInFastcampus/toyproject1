import { MemberMockType } from "@/components/main/types";

const UserDetails = ({ department, role }: MemberMockType) => {
  return (
    <div>
      <div className="nflex nflex-row njustify-center nbg-white nrounded-full np-3 nitems-center nfont-semibold">
        <div className="nmr-10">부서: {department}</div>
        <div>직급: {role}</div>
      </div>
    </div>
  );
};

export default UserDetails;
