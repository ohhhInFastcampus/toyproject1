import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  function UserAvatar() {
    return (
      <>
        <Avatar className={`nflex njustify-center`}>
          <AvatarImage src="/vite.svg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className={`nflex njustify-center nitem-center nw-4 nh-4 nrounded-full nbg-gray-200`}>
          <span className={`ntext-sm`}>+</span>
        </div>
      </>
    )
  }
  export {UserAvatar}
