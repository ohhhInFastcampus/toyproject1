import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { MemberMockType } from "@/components/main/types";

const UserHeader = ({ name }: MemberMockType) => {
  return (
    <div className="nflex nitems-center nbg-blue-200 nrounded-xl npx-3 npy-1">
      <Avatar>
        <AvatarImage src="/vite.svg" alt="User Profile" className="nbg-white" />
      </Avatar>
      <Button size="s" className="nm-1 nml-2">
        {name}
      </Button>
    </div>
  );
};

export { UserHeader };
