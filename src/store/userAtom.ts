import { atom, atomFamily } from "recoil";
import { MemberDetailTypes } from "@/components/main/types.ts";
import { getLocalStorage } from "@/utils/settingStorage.ts";

const user: MemberDetailTypes = getLocalStorage("user");
export const userAtom = atom<MemberDetailTypes>({
  key: "user",
  default: {
    name: user.name,
    email: user.email,
    department: user.department,
    role: user.role,
    isWorking: user.isWorking,
    startTime: user.startTime,
    endTime: user.endTime,
    profile: user.profile,
  },
});

export const userStateFamily = atomFamily<MemberDetailTypes, string>({
  key: "userStateFamily",
  default: (email) =>
    getLocalStorage(email) || {
      name: "",
      email: "",
      department: "",
      role: "",
      isWorking: "not working",
      startTime: "1999-01-01 00:00:00",
      endTime: "1999-01-01 00:00:00",
      profile: "",
    },
});
