import {atom} from 'recoil';
import {MemberDetailTypes} from "@/components/main/types.ts";


export const userAtom = atom<MemberDetailTypes>({
    key: "user",
    default : {
        name: "",
        email: "",
        department : "",
        role : "",
        isWorking : "not working",
        startTime : '1999-01-01 00:00:00',
        endTime: '1999-01-01 00:00:00',
        profile : ""
    }

});
