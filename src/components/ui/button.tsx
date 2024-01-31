import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const buttonVariants = cva(
  'ninline-flex nitems-center njustify-center nwhitespace-nowrap nrounded-md ntext-sm nfont-medium nring-offset-background ntransition-colors focus-visible:noutline-none focus-visible:nring-2 focus-visible:nring-ring focus-visible:nring-offset-2 disabled:npointer-events-none disabled:nopacity-50',
  {
    variants: {
      variant: {
        default: 'nbg-black ntext-primary-foreground hover:nbg-black/90',
        destructive: 'nbg-destructive ntext-destructive-foreground hover:nbg-destructive/90',
        outline: 'nborder nborder-input nbg-background hover:nbg-accent hover:ntext-accent-foreground',
        secondary: 'nbg-secondary ntext-secondary-foreground hover:nbg-secondary/80',
        ghost: 'hover:nbg-accent hover:ntext-accent-foreground',
        link: 'ntext-primary nunderline-offset-4 hover:nunderline',
      },

      size: {
        default: 'nh-10 npx-4 npy-2',
        sx: 'nh-1 npx-1 npy-1',
        sm: 'nh-9 nrounded-md npx-3',
        lg: 'nh-11 nrounded-md npx-8',
        icon: 'nh-10 nw-10',
      },
      font: {
        default: 'ntext-sm', // 기본 14px
        xs: 'ntext-xs', // 12px
        base: 'ntext-base', // 16px
        lg: 'ntext-lg', // 18px
        xl: 'ntext-xl', // 20px
      },
      weight: {
        default: 'nfont-normal',
        medium: 'nfont-medium',
        bold: 'nfont-bold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      font: 'default',
      weight: 'default',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, font, weight, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, font, weight, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
