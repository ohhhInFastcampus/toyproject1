import {collection, doc, getDocs} from "firebase/firestore";
import {db} from "@/Firebase.ts";

export const getUserList = async () => {
    // const list =
    const userCollection = collection(db, "user");
    const userList = await getDocs(userCollection);
    const docs = userList.forEach((item) => {

        let newItem = {

        }
        console.log(item.id, item.data(), "item")
    })
}