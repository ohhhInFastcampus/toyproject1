import {Input} from "@/components/ui/input";
import {LoginDetailType} from "@/components/login/types"


function LoginDetail({id, type, placeholder, value, onChange}: LoginDetailType) {

    return (
        <div className="np-1">
            <Input
                className="njustify-items-center np-2 nw-60 nrounded-sm nborder-2 nborder-stone-300 np-1 nmt-1"
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e)=>{onChange(e.target.value)}}
            />
        </div>
    );
}

export default LoginDetail;
