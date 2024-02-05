import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MemberDetailType } from "@/components/main/types";
import React, {useRef, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
interface userAvatarType {
    profile : MemberDetailType,
    changeImage :(e: React.ChangeEvent<HTMLInputElement>) => Promise<string>
}
const UserAvatar = ({ profile,changeImage }: userAvatarType) => {
    const [img,setImg] = useState(profile.profile);
    const settingImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeImage(e).then((res)=>{
            setImg(res);
        })
    }
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
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
