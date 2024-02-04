import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "@/Firebase.ts";
import {editWorkingStateInUserList} from "@/utils/userList.ts";
import {parsingDateToString} from "@/utils/parsingDate.ts";


interface reqWorkingStateType {
    startWorking: string,
    endWorking: string
    email: string,
    isWorking: boolean
}

interface resWorkingStateType {
    startWorking: string,
    endWorking: string
}

export const getWorkingState = async (email: string): Promise<resWorkingStateType> => {
    const workingState = doc(db, "working", email);
    const result = await getDoc(workingState);

    const data = result.data() as resWorkingStateType;
    if (data !== undefined) {
        return {
            startWorking: data.startWorking, endWorking: data.endWorking
        };
    }

    return {startWorking: parsingDateToString(new Date("1999-01-01 00:00:00")), endWorking: parsingDateToString(new Date("1999-01-01 00:00:00"))}
}
export const editWorkingState = async ({startWorking, endWorking, email,isWorking}: reqWorkingStateType): Promise<resWorkingStateType> => {
    const workingState = doc(db, "working", email);
    console.log({startWorking: startWorking, endWorking: endWorking},"endWorking")
    await setDoc(workingState, {startWorking: startWorking, endWorking: endWorking}, {merge: true})
        .catch((reason) => {
            console.error(reason);
        })
    await editWorkingStateInUserList(isWorking);
    return {startWorking: startWorking, endWorking: endWorking}
}

