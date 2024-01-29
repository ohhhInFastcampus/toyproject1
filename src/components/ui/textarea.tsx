import * as React from "react";

import { cn } from "@/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "nflex nmin-h-[80px] nw-full nrounded-md nborder nborder-input nbg-background npx-3 npy-2 ntext-sm nring-offset-background placeholder:ntext-muted-foreground focus-visible:noutline-none focus-visible:nring-2 focus-visible:nring-ring focus-visible:nring-offset-2 disabled:ncursor-not-allowed disabled:nopacity-50 nresize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
