import {MemberDetailTypes} from "@/components/main/types.ts";
import {getLocalStorage} from "@/utils/settingStorage.ts";
import {collection, getDocs, addDoc, query, where} from "firebase/firestore";
import {db} from "@/Firebase.ts";
import {reqAbsenceType} from "@/templates/absenceRequest/types.ts";

//TODO 연차요청 인터페이스 조정 필요


const user: MemberDetailTypes = getLocalStorage("user");
export const postAbsenceRequest = async (request: reqAbsenceType) => {
    const absenceRequest = collection(db, "absenceRequestDetails");
    let setData: reqAbsenceType = {
        name: request.name,
        halfDayTime: request.halfDayTime,
        approver: request.approver,
        date: request.date,
        position: request.position,
        reason: request.reason,
        absenceTime: request.absenceTime,
        email: user.email
    }
    await addDoc(absenceRequest, setData);
    return setData;
}
export const getAbsenceRequestDetails = async (): Promise<reqAbsenceType[]> => {
    let list: reqAbsenceType[] = [];
    const absenceRequestCollection = collection(db, "absenceRequestDetails");
    const absenceRequestList = await getDocs(absenceRequestCollection);
    absenceRequestList.forEach((item) => {
        const newItem = item.data() as reqAbsenceType;
        newItem.email = user.email;
        list.push(newItem);
    });
    return list;
}

export const getAbsenceRequestDetailsFilter = async (key: string, filter: string): Promise<reqAbsenceType[]> => {
    let list: reqAbsenceType[] = [];
    const absenceRequestCollection = collection(db, "absenceRequestDetails");
    const filtering = query(absenceRequestCollection, where(key, '==', filter))
    const absenceRequestList = await getDocs(filtering);
    absenceRequestList.forEach((item) => {
        list.push(item.data() as reqAbsenceType);
    });
    return list;
}