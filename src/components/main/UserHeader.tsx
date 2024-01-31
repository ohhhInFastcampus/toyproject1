import { Button } from '../ui/button';

interface UserProps {
  name: string;
}

const UserHeader = ({ name }: UserProps) => {
  
    return (
      <div className="nflex nitems-center nbg-blue-100 nrounded-full npx-3 npy-1">
        <img src="/vite.svg" alt="User Profile" className="nw-10 nh-10 nrounded-full nmr-2" />
        <Button size="s" font="xs" className="nm-1 nbg-black ntext-white">
          {name}
        </Button>                                                                
      </div>
    );
};

export {UserHeader};