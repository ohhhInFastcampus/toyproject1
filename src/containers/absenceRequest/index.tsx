import {useState} from "react";
import AbsenceRequest from "@/templates/absenceRequest";
import {reqAbsenceType} from "@/templates/absenceRequest/types.ts";
import {postAbsenceRequest} from "@/utils/absenceRequest.ts";
import {MemberDetailTypes} from "@/components/main/types.ts";
import {getLocalStorage} from "@/utils/settingStorage.ts";
import SubmitModal from "@/components/absenceRequest/SubmitModal"
import ErrorModal from "@/components/absenceRequest/ErrorModal";
import {format} from "date-fns";

const AbsenceRequestPage = () => {
    const user: MemberDetailTypes = getLocalStorage("user");
    const [value, setValue] = useState('')
    const [showModal, setShowModal] = useState(false); 
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [formData, setFormData] = useState<reqAbsenceType>({
        email: '',
        name: user.name,
        position: user.department,
        approver: '',
        date: format(new Date(), "yyyy-MM-dd"),
        absenceTime: 0,
        halfDayTime: '',
        reason: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Check if any required field is empty
        if (
            !formData.name ||!formData.position ||!formData.approver ||!formData.date ||!formData.reason ||!value
        ) {
            setShowErrorModal(true);
            return; 
        }
        let newFormData = formData;
        newFormData.absenceTime = Number(value);
        postAbsenceRequest(newFormData)
            .then(() => {
                setShowModal(true);
                console.log('submit')
            })
            .catch((error) => {
                console.error("An error occurred while submitting the form.", error);
            });
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
    const closeModal = () => {
        setShowModal(false);
      };
      const closeErrorModal = () => {
        setShowErrorModal(false);
      };
    return (
        <>
        <AbsenceRequest
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleTimeClick={handleTimeClick}
            setValue={setValue}
            value={value}
        />
        {showModal ? <SubmitModal open={true} onClose={closeModal} /> : null}
        {showErrorModal ? <ErrorModal open={true} onClose={closeErrorModal} /> : null}
        </>
    )
}

export default AbsenceRequestPage;