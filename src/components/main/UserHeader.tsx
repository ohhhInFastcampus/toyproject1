import { Avatar, AvatarImage,} from '../ui/avatar';
import { Button } from '../ui/button';

interface UserProps {
  name: string;
}

const UserHeader = ({ name }: UserProps) => {

    return (
      <div className="nflex nitems-center nbg-blue-100 nrounded-full npx-3 npy-1">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User Profile" />
        </Avatar>
        <Button size="s" font="xs" className="nm-1 nbg-black ntext-white">
          {name}
        </Button>                                                                
      </div>
    );
};

export {UserHeader};