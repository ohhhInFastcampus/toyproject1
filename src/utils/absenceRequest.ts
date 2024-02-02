import {MemberDetailTypes} from "@/components/main/types.ts";
import {getLocalStorage} from "@/utils/settingStorage.ts";
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "@/Firebase.ts";
import {ParsingDateToString} from "@/utils/parsingDate.ts";

//TODO 연차요청 인터페이스 조정 필요
interface reqAbsenceType {
    approver: string;
    position: string;
    name: string;
    email: string,
    date: Date,
    absenceTime: number,
    halfDayTime: string,
    reason: string,
}

export interface reqAbsenceToDB {
    name: string,
    type: string,
    approve: string,
    date: string,
    department: string,
    reason: string,
    absenceTime: number,
}

const user: MemberDetailTypes = getLocalStorage("user");
export const postAbsenceRequest = async (request: reqAbsenceType) => {
    const absenceRequest = doc(db, "absenceRequestDetails", user.email);
    let setData: reqAbsenceToDB = {
        name: request.name,
        type: request.position,
        approve: request.approver,
        date: ParsingDateToString(request.date),
        department: user.department,
        reason: request.reason,
        absenceTime: request.absenceTime,
    }
    await setDoc(absenceRequest, setData);
    return setData;
}
export const getAbsenceRequestDetails = async (): Promise<reqAbsenceToDB[]> => {
    let list: reqAbsenceToDB[] = [];
    const absenceRequestCollection = collection(db, "absenceRequestDetails");
    const absenceRequestList = await getDocs(absenceRequestCollection);
    absenceRequestList.forEach((item) => {
        list.push(item.data() as reqAbsenceToDB);
    });
    return list;
}