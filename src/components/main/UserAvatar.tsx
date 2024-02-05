import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MemberDetailType } from "@/components/main/types";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { useSetRecoilState } from "recoil";
import { userStateFamily } from "@/store/userAtom";

interface userAvatarType {
  profile: MemberDetailType;
  changeImage: (e: React.ChangeEvent<HTMLInputElement>) => Promise<string>;
}
const UserAvatar = ({ profile, changeImage }: userAvatarType) => {
  const [img, setImg] = useState(profile.profile);
  const setUserState = useSetRecoilState(userStateFamily(profile.email));

  const settingImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeImage(e).then((newProfileUrl) => {
      setImg(newProfileUrl);
      setUserState((oldProfileData) => ({
        ...oldProfileData,
        profile: newProfileUrl,
      }));
    });
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <>
      <div className="nrelative ninline-block">
        <Avatar className="nflex njustify-center nw-40 nh-40 nbg-white">
          <AvatarImage src={img} alt="@shadcn" />
        </Avatar>
        <label className="cursor-pointer">
          <input
            type="file"
            ref={fileInputRef}
            onChange={settingImage}
            style={{ display: "none" }}
          />
          <Button
            size="s"
            className="nbg-gray-500 nabsolute nbottom-0 nright-3"
            onClick={handleClick}
          >
            +
          </Button>
        </label>
      </div>
    </>
  );
};
export { UserAvatar };
