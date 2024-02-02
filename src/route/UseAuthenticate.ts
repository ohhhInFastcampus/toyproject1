import {getLocalStorage} from "@/utils/SettingStorage.ts";

export const useAuthenticate = (): boolean => {
    const userData = getLocalStorage("user");
    //TODO 로그인 기능 구현 후 isUserLoggedIn 기본값 false로 변경
    let isUserLoggedIn = true;
    if (!(typeof userData === "string")) {
        isUserLoggedIn = true;
    }
        return isUserLoggedIn;
};