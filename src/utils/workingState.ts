import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "@/Firebase.ts";
import {format} from "date-fns";


interface reqWorkingStateType {
    startWorking: Date,
    endWorking: Date
    email : string
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
        return data;
    }
    return {startWorking: "00:00", endWorking: "00:00"}
}
export const editWorkingState = ({startWorking, endWorking,email}: reqWorkingStateType): boolean => {
    const workingState = doc(db, "working", email);
    let isSuccess = false;
    let startWorkingDate = format(startWorking, 'hh:mm')
    let endWorkingDate = format(endWorking, 'hh:mm')
    setDoc(workingState, {startWorking: startWorkingDate, endWorking: endWorkingDate}, {merge: true}).then(() => {
        isSuccess = true;
        return isSuccess;
    })
        .catch((reason) => {
            console.error(reason);
        })
    return isSuccess;
}

