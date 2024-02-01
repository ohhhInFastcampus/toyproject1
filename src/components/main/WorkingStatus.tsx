import { MemberDetailType } from "@/components/main/types";

interface WorkingStatusProps {
  members: MemberDetailType[];
}

const WorkingStatus = ({ members }: WorkingStatusProps) => {
  return (
    <div className="nw-[300px] nh-[400px] np-7 nbg-white nrounded-lg nshadow-md nborder-2">
      <div className="nbg-yellow-200 nrounded-lg nshadow-md np-2 nmb-4">
        <h1 className="ntext-lg ntext-center nfont-bold">근무중인 사람</h1>
      </div>
      <h2 className="nmt-8 ntext-left nfont-bold">Core Team</h2>
      <ul className="nmt-4">
        {members.map((member) => (
          <li key={member.name} className="nflex nitems-center nmb-2">
            <img
              src={member.profile}
              alt={member.name}
              className="nw-8 nh-8 nrounded-full"
            />
            <div
              className={`nmr-4 nw-3 nh-3 nrounded-full ${
                member.isWorking === "working"
                  ? "nbg-green-500"
                  : "nbg-gray-500"
              }`}
            />
            <span>{member.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkingStatus;
