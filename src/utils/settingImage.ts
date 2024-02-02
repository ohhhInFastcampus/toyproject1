import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import React from "react";
import {MemberDetailTypes} from "@/components/main/types.ts";
import {getLocalStorage} from "@/utils/settingStorage.ts";


const user: MemberDetailTypes = getLocalStorage("user");
const storage = getStorage();
export const settingUserImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if(files === null) return;
    const theFile = files[0];
    const uploadedFile = await uploadBytes(
        ref(storage, `user/${user.email}`), theFile
    );
    return await getDownloadURL(uploadedFile.ref);
}

export const getUserImage = async () => {
    return await getDownloadURL(ref(storage, `user/${user.email}`));
}