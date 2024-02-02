import React from 'react';
import { Input } from "@/components/ui/input";
import {LoginDetailType} from "@/components/login/types"


function LoginDetail(props: LoginDetailType) {
  const { id, type, placeholder, value, onChange } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="np-1">
      <Input  
        className="njustify-items-center np-2 nw-60 nrounded-sm nborder-2 nborder-stone-300 np-1 nmt-1"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default LoginDetail;
