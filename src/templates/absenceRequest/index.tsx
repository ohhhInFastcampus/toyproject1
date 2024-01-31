import { SetStateAction, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from '@/components/ui/textarea';
import SelectBox from '@/components/SelectBox';
import RequestDetail from '@/components/absence_request/RequestDetail';

interface reqAbsenceType {
  email : string ,
  date : Date,
  absenceTime : number,
  reason : string
}

function AbsenceRequest() {

  const [value, setValue] = useState('')


  const [formData, setFormData] = useState<reqAbsenceType>({
    email: '',
    date: new Date(),
    absenceTime: 0,
    reason: ''
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
    <Card>
    <form onSubmit={handleSubmit}>
      <CardHeader>
        <CardTitle>부재 신청</CardTitle>
        <CardDescription>
          {/* What area are you having problems with? */}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <RequestDetail type="이름" input="text" />
          <RequestDetail type="직급" input="title" />
          <RequestDetail type="결재자" input="approver" />
          <RequestDetail type="날짜" input="date" />
          {/* <div className="grid gap-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" type="text" placeholder="이름" onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="area">직급</Label>
            <Input id="title" type="title" placeholder="직급" onChange={handleChange}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="area">결재자</Label>
            <Input id="approver" type="approver" placeholder="결재자" onChange={handleChange}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="area">날짜</Label>
            <Input id="date" type="date" placeholder="날짜" onChange={handleChange}/>
          </div> */}
          <div className="grid gap-2">
            <Label htmlFor="request-absence-type">부재신청 타입</Label>
            <SelectBox defaultValue={''} 
            selectItem={[
              {value : "4",name : "반차"}, 
              {value : "8", name: "연차"}]} 
              getValue={setValue} />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="reason">부재신청 사유</Label>
          <Textarea
            id="reason"
            placeholder="부재신청 사유를 작성해주세요."
            onChange={handleChange}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">cancel</Button>
        <Button>submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default AbsenceRequest;
