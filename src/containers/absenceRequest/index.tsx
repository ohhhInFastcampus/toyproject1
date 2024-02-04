import {useState} from "react";
import AbsenceRequest from "@/templates/absenceRequest";
import {reqAbsenceType} from "@/templates/absenceRequest/types.ts";

const AbsenceRequestPage = () => {

    const [value, setValue] = useState('')
    const [showButtons, setShowButtons] = useState(false);
    const [formData, setFormData] = useState<reqAbsenceType>({
        email: '',
        name: '',
        position: '',
        approver: '',
        date: new Date(),
        absenceTime: 0,
        halfDayTime: '',
        reason: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newFormData = formData ;
        newFormData.absenceTime = Number(value);
        console.log(newFormData,"newFormData");
        //ex api
        console.log(formData);
    };

    const handleTimeClick = (time: string) => {
        setFormData(prevData => ({
            ...prevData,
            halfDayTime: time
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        if (id === 'request-absence-type') {
            setShowButtons(value === '4');
        }
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };
    return (
        <AbsenceRequest formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} handleTimeClick={handleTimeClick} setValue={setValue} showButtons={showButtons}/>
    )
}

export default AbsenceRequestPage;