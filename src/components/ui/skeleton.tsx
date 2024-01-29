import * as React from 'react';
import { cn } from "@/utils"
import '@/components/Skeleton.css';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("nanimate-pulse nrounded-md nbg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
