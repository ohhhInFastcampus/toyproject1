import {MemberDetailTypes} from "@/components/main/types.ts";
import {getLocalStorage} from "@/utils/settingStorage.ts";
import {collection, getDocs, addDoc, query, where} from "firebase/firestore";
import {db} from "@/Firebase.ts";
import {reqAbsenceType} from "@/templates/absenceRequest/types.ts";

//TODO 연차요청 인터페이스 조정 필요


export interface reqAbsenceToDB {
    name: string,
    type: string,
    approver: string,
    date: string,
    department: string,
    reason: string,
    absenceTime: number,
}

const user: MemberDetailTypes = getLocalStorage("user");
export const postAbsenceRequest = async (request: reqAbsenceType) => {
    const absenceRequest = collection(db, "absenceRequestDetails");
    let setData: reqAbsenceToDB = {
        name: request.name,
        type: request.position,
        approver: request.approver,
        date: request.date,
        department: user.department,
        reason: request.reason,
        absenceTime: request.absenceTime,
    }
    await addDoc(absenceRequest, setData);
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

export const getAbsenceRequestDetailsFilter = async (key: string,filter:string): Promise<reqAbsenceToDB[]> => {
    let list: reqAbsenceToDB[] = [];
    const absenceRequestCollection = collection(db, "absenceRequestDetails");
    const filtering = query(absenceRequestCollection, where(key,'==',filter))
    const absenceRequestList = await getDocs(filtering);
    absenceRequestList.forEach((item) => {
        list.push(item.data() as reqAbsenceToDB);
    });
    return list;
}