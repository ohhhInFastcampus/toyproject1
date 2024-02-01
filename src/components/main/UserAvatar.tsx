import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MemberDetailType } from "@/components/main/types";

const UserAvatar = ({ profile }: MemberDetailType) => {
  return (
    <>
      <div className="nrelative ninline-block">
        <Avatar className="nflex njustify-center nw-40 nh-40 nbg-white">
          <AvatarImage src={profile} alt="@shadcn" />
        </Avatar>
        <Button
          variant="outline"
          size="xs"
          font="base"
          className="nabsolute nright-0 nbottom-0 nflex njustify-center nalign-items nrounded-full nh-7 nw-7 nbg-gray-300"
        >
          +
        </Button>
      </div>
    </>
  );
};
export { UserAvatar };
