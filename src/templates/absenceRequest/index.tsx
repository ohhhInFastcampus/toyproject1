import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Label} from "@/components/ui/label";
import {Textarea} from '@/components/ui/textarea';
import SelectBox from '@/components/SelectBox';
import RequestDetail from '@/components/absenceRequest/RequestDetail';
import {reqAbsenceType} from "@/templates/absenceRequest/types.ts";
import "./absenceRequest.scss"

interface AbsenceRequestType {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    formData: reqAbsenceType,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    handleTimeClick: (time: string) => void,
    value : string
}

function AbsenceRequest({
                            handleSubmit,
                            formData,
                            handleChange,
                            setValue,
                            handleTimeClick,
                            value
                        }: AbsenceRequestType) {




    return (
        <Card className="nflex njustify-center">
        <Card className="nw-[500px] np-[30px] nm-10 nbg-slate-50 nborder-solid nborder-1 nborder-gray-300 nshadow-xl ">
            <form onSubmit={handleSubmit}>
                <CardHeader className="ngrid njustify-items-center npy-5 nmb-5">
                    <CardTitle className="njustify-items-center">부재 신청</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="ngrid ngrid-cols-2">
                        <RequestDetail disabled={true} type="이름" input="text" id="name" value={formData.name} onChange={handleChange}/>
                        <RequestDetail disabled={true} type="직급" input="title" id="position" value={formData.position}
                                       onChange={handleChange}/>
                        <RequestDetail type="결재자" input="approver" id="approver" value={formData.approver}
                                       onChange={handleChange}/>
                        <RequestDetail type="날짜" value={formData.date} input="date" id="date" onChange={handleChange}/>
                    </div>
                    <div className="nflex-row ngap-6 np-3">
                        <Label className="nflex nmy-3" htmlFor="request-absence-type">부재신청 타입</Label>
                        <SelectBox
                            defaultValue={''}
                            selectItem={[
                                {value: "4", name: "반차"},
                                {value: "8", name: "연차"}]}
                            getValue={setValue}/>
                    </div>
                    {value === "4" ?
                        <div className="nflex ngap-3 np-3">
                            <Button variant="ghost" className="nshadow-md" type="button" onClick={() => handleTimeClick("오전")}>오전</Button>
                            <Button variant="ghost" className="nshadow-md" type="button" onClick={() => handleTimeClick("오후")}>오후</Button>
                        </div> : <></>
                    }
                    <div className="nflex-row ngap-6 np-3">
                        <Label className="nflex nmy-3" htmlFor="reason">부재신청 사유</Label>
                        <Textarea
                            id="reason"
                            placeholder="부재신청 사유를 작성해주세요."
                            onChange={handleChange}
                        />
                    </div>
                </CardContent>
                <CardFooter className="ngrid njustify-items-end">
                    {/* <Button variant="ghost" className="nshadow-md" onClick={handleCancel}>cancel</Button> */}
                    <Button className="nshadow-lg nbg-sky-500 nhover:bg-sky-700" type="submit">submit</Button>
                </CardFooter>
            </form>
        </Card>
        </Card>
    );
}

export default AbsenceRequest;
