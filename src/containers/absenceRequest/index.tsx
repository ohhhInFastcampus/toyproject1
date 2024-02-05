import {useState} from "react";
import AbsenceRequest from "@/templates/absenceRequest";
import {reqAbsenceType} from "@/templates/absenceRequest/types.ts";
import {postAbsenceRequest} from "@/utils/absenceRequest.ts";
import {parsingDateToString} from "@/utils/parsingDate.ts";
import {MemberDetailTypes} from "@/components/main/types.ts";
import {getLocalStorage} from "@/utils/settingStorage.ts";

const AbsenceRequestPage = () => {
    const user: MemberDetailTypes = getLocalStorage("user");
    const [value, setValue] = useState('')
    const [formData, setFormData] = useState<reqAbsenceType>({
        email: '',
        name: user.name,
        position: user.department,
        approver: '',
        date: parsingDateToString(new Date()),
        absenceTime: 0,
        halfDayTime: '',
        reason: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newFormData = formData ;
        newFormData.absenceTime = Number(value);
        postAbsenceRequest(newFormData).then(()=>{
            //TODO 모달창 나오게 해야함
        })
        //TODO catch error
    };

    const handleTimeClick = (time: string) => {
        setFormData(prevData => ({
            ...prevData,
            halfDayTime: time
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };
    return (
        <AbsenceRequest formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} handleTimeClick={handleTimeClick} setValue={setValue} value={value}/>
    )
}

export default AbsenceRequestPage;