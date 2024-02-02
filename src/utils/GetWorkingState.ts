import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "@/Firebase.ts";
import {getLocalStorage} from "@/utils/SettingStorage.ts";
import {MemberDetailTypes} from "@/components/main/types.ts";

const user: MemberDetailTypes = getLocalStorage("user");
const workingState = doc(db, "working", user.email);

interface reqWorkingStateType {
    startWorking: Date,
    endWorking: Date
}

interface resWorkingStateType {
    startWorking: string,
    endWorking: string
}

export const getWorkingState = async (): Promise<resWorkingStateType> => {
    const result = await getDoc(workingState);
    const data = result.data() as resWorkingStateType;
    if (data !== undefined) {
        return data;
    }
    return {startWorking: "00:00:00", endWorking: "00:00:00"}
}
export const editWorkingState = ({startWorking, endWorking}: reqWorkingStateType): boolean => {
    let isSuccess = false;
    let startWorkingDate = changeDateToTimeStamp(startWorking);
    let endWorkingDate = changeDateToTimeStamp(endWorking);
    setDoc(workingState, {startWorking: startWorkingDate, endWorking: endWorkingDate}, {merge: true}).then(() => {
        isSuccess = true;
        return isSuccess;
    })
        .catch((reason) => {
            console.error(reason);
        })
    return isSuccess;
}

export const changeDateToTimeStamp = (date: Date) => {
    date.setHours(date.getHours() + 9);
    return date.toISOString().replace('T', ' ').substring(0, 19);
}