import React from 'react';
import { Input } from "@/components/ui/input";
import {LoginDetailType} from "@/components/login/types"


function LoginDetail(props: LoginDetailType) {
  const { id, type, placeholder, value, onChange } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="grid gap-2">
      <Input
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
