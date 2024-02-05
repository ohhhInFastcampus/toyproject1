import { Input } from "@/components/ui/input";
import {RequestDetailType} from "@/components/absenceRequest/types";
import { Label } from "@/components/ui/label";

const RequestDetail = ({type, input, id, value, onChange, disabled = false} : RequestDetailType) => {
  return (
    <div className="nflex-row ngap-6 np-3 nfont-semibold">
      <div>
        <Label className="nitems-center" htmlFor={id}>{type}</Label>
      </div>
      <div>
        <Input className="nrounded-sm nborder-2 nborder-stone-300 np-1 nmt-1"
        id={id} type={input} value={value} onChange={onChange} placeholder={type} disabled={disabled} />
      </div>
    </div>
  )
}

export default RequestDetail;


