import {collection, getDocs} from "firebase/firestore";
import {db} from "@/Firebase.ts";
import {MemberDetailType, MemberDetailTypes} from "@/components/main/types.ts";

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

