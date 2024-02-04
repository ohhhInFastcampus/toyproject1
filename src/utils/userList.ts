import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "@/Firebase.ts";
import {MemberDetailType, MemberDetailTypes} from "@/components/main/types.ts";
import {getLocalStorage} from "@/utils/settingStorage.ts";

export const getUserList = async () => {
    const list: MemberDetailTypes[] = [];
    const userCollection = collection(db, "user");
    const userList = await getDocs(userCollection);
    userList.forEach((item) => {
            let obj : MemberDetailTypes = {
                ...item.data() as MemberDetailType , email : item.id
            }
        list.push(obj);
        return;
    });
    return list;
}

export const editWorkingStateInUserList = async (status : boolean) => {
    const user: MemberDetailTypes = getLocalStorage("user");
    if(user) {
        const searchUser = doc(db, "user", user.email);
        await setDoc(searchUser , {isWorking : status}, {merge : true})
            .catch((reason) => {
                console.error(reason);
            })
    } else {
        return
    }
}