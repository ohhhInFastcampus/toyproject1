import { Input } from "@/components/ui/input";
import {RequestDetailType} from "@/components/absenceRequest/types";
import { Label } from "@/components/ui/label";

const RequestDetail = ({type, input } : RequestDetailType) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="name">{type}</Label>
      <Input id={input} type={input} placeholder={type}/>
    </div>
  )
}

export default RequestDetail;
