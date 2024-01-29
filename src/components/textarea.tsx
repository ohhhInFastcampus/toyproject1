import React, { TextareaHTMLAttributes } from "react";
import { Textarea } from "./ui/textarea";

interface CustomTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  className?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  placeholder,
  className,
  ...props
}) => {
  const combinedClassName = `resize-none ${className || ""}`;

  return (
    <Textarea
      placeholder={placeholder}
      className={combinedClassName}
      {...props}
    />
  );
};

export default CustomTextarea;
