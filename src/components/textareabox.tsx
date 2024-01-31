import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";

interface TextareaBox {
  label?: string; // label text 옵셔널 prop
  placeholder?: string; // placeholder text 옵셔널 prop
  textareaId: string; // Textarea ID
}

// TODO: textarea 참조할 수 있게하기
const containerVariants = cva(
  "nflex nflex-col ninline-flex nw-full ngap-1.5  nrounded-ful"
);
const labelVariants = cva("nfont-bold ntext-left nm-2");

export function TextareaBox({ label, placeholder, textareaId }: TextareaBox) {
  return (
    <div className={cn(containerVariants())}>
      {label && (
        <Label htmlFor={textareaId} className={cn(labelVariants())}>
          {label}
        </Label>
      )}
      <Textarea placeholder={placeholder || ""} id={textareaId} />
    </div>
  );
}
