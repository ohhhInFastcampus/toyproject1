import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Textarea } from '@/components/ui/textarea';
import SelectBox from '@/components/SelectBox';
import RequestDetail from '@/components/absenceRequest/RequestDetail';

interface reqAbsenceType {
  approver: string;
  position: string;
  name: string;
  email : string ,
  date : Date,
  absenceTime : number,
  reason : string,
}

function AbsenceRequest() {

  const [value, setValue] = useState('')


  const [formData, setFormData] = useState<reqAbsenceType>({
    email: '',
    name: '',
    position: '',
    approver: '',
    date: new Date(),
    absenceTime: 0,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };
  
  
  return (
    <Card className="nw-[500px] np-[30px] nm-10 nborder-solid nborder-2 nborder-gray-300">
      <form onSubmit={handleSubmit}>
        <CardHeader className="ngrid njustify-items-center npy-5 nmb-5">
          <CardTitle className="njustify-items-center">부재 신청</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="ngrid ngrid-cols-2">
            <RequestDetail type="이름" input="text" id="name" value={formData.name} onChange={handleChange} />
            <RequestDetail type="직급" input="title" id="position" value={formData.position} onChange={handleChange} />
            <RequestDetail type="결재자" input="approver" id="approver" value={formData.approver} onChange={handleChange} />
            <RequestDetail type="날짜" input="date" id="date" onChange={handleChange} />
          </div>  
          <div className="nflex-row ngap-6 np-3">
              <Label className="nflex nmy-3" htmlFor="request-absence-type">부재신청 타입</Label>
              <SelectBox defaultValue={''} 
              selectItem={[
                {value : "4",name : "반차"}, 
                {value : "8", name: "연차"}]} 
                getValue={setValue} />
          </div>
          <div className="nflex-row ngap-6 np-3">
            <Label className="nflex nmy-3" htmlFor="reason">부재신청 사유</Label>
            <Textarea 
              id="reason"
              placeholder="부재신청 사유를 작성해주세요."
              onChange={handleChange}
            />
          </div>
        </CardContent>
        <CardFooter className="nflex ngap-6">
          <Button variant="ghost">cancel</Button>
          <Button>submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default AbsenceRequest;
