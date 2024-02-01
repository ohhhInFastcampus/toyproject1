import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface UserProps {
  name: string;
}

const UserHeader = ({ name }: UserProps) => {
  return (
    <div className="nflex nitems-center nbg-blue-200 nrounded-xl npx-3 npy-1">
      <Avatar>
        <AvatarImage src="/vite.svg" alt="User Profile" className="nbg-white" />
      </Avatar>
      <Button variant="default" size="s" font="xs" className="nm-1 nml-2">
        {name}
      </Button>
    </div>
  );
};

export { UserHeader };
