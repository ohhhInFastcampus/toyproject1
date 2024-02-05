import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MemberDetailType } from "@/components/main/types";
import React, { useState } from "react";
import { Button } from "../ui/button";

const UserAvatar = ({ profile, changeImage }: MemberDetailType) => {
  const [img, setImg] = useState(profile);
  const settingImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeImage(e).then((res) => {
      setImg(res);
    });
  };
  return (
    <>
      <div className="nrelative ninline-block">
        <Avatar className="nflex njustify-center nw-40 nh-40 nbg-white">
          <label className="cursor-pointer">
            <input
              type="file"
              onChange={settingImage}
              style={{ display: "none" }}
            />
            <AvatarImage src={img} alt="@shadcn" />
          </label>
        </Avatar>
      </div>
    </>
  );
};
export { UserAvatar };
