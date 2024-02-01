import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    checkedColor?: string;
  }
>(({ className, checkedColor, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "npeer ninline-flex nh-8 nw-16 nshrink-0 ncursor-pointer nitems-center nrounded-full nborder-2 nborder-transparent ntransition-colors focus-visible:noutline-none focus-visible:nring-2 focus-visible:nring-ring focus-visible:nring-offset-2 focus-visible:nring-offset-background disabled:ncursor-not-allowed disabled:nopacity-50 data-[state=unchecked]:nbg-input data-[state=checked]:nbg-emerald-500",
      checkedColor && `data-[state=checked]:${checkedColor}`,
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "npointer-events-none nblock nh-8 nw-8 nrounded-full nbg-background nshadow-lg nring-0 ntransition-transform data-[state=checked]:ntranslate-x-9 data-[state=unchecked]:ntranslate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
