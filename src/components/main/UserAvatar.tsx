import {
    Avatar,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
  
  
  function UserAvatar() {
    return (
      <>
        <div className="nrelative ninline-block"> 
          <Avatar className="nflex njustify-center">
            <AvatarImage src="/vite.svg" alt="@shadcn" />
          </Avatar>
          <Button variant="outline" size="sx" font="xs" className="nabsolute nright-0 nbottom-0 nflex njustify-center nalign-items nrounded-full nh-2 nw-2 nbg-gray-300" >
            +
          </Button>
        </div>
      </>
    )
  }
  export {UserAvatar}
