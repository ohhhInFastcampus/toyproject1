import * as React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker";

import { cn } from "@/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "np-7 nrounded-lg nshadow-md nborder-2 nbg-yellow-200",
        className
      )}
      classNames={{
        months:
          "nflex nflex-col nsm:nflex-row nspace-y-4 nsm:nspace-x-4 nsm:nspace-y-0",
        month: "nspace-y-4",
        caption: "nflex njustify-center npt-1 nrelative nitems-center",
        caption_label: "ntext-[1.2rem] nfont-bold nmb-2",
        nav: "nspace-x-1 nflex nitems-center ",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "nh-7 nw-7 nbg-transparent np-0 nopacity-50 nhover:nopacity-100"
        ),
        nav_button_previous: "nabsolute nleft-1 nbg-white",
        nav_button_next: "nabsolute nright-1 nbg-white",
        table: "nw-full nborder-collapse nspace-y-1 ",
        head_row: "nflex",
        head_cell:
          "ntext-muted-foreground nrounded-md nw-9 nfont-normal ntext-[0.8rem]",
        row: "nflex nw-full nmt-2",
        cell: "nh-9 nw-9 ntext-center ntext-sm np-0 nrelative [&:nhas([aria-selected].nday-range-end)]:nrounded-r-md [&:nhas([aria-selected].nday-outside)]:nbg-accent/50 [&:nhas([aria-selected])]:nbg-accent nfirst:[&:nhas([aria-selected])]:nrounded-l-md nlast:[&:nhas([aria-selected])]:nrounded-r-md nfocus-within:nrelative nfocus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "nh-9 nw-9 np-0 nfont-normal naria-selected:nopacity-100 "
        ),
        day_range_end: "nday-range-end",
        day_selected:
          "nbg-primary ntext-primary-foreground nhover:nbg-primary nhover:ntext-primary-foreground nfocus:nbg-primary nfocus:ntext-primary-foreground",
        day_today: "nbg-accent ntext-accent-foreground nbg-white",
        day_outside:
          "nday-outside ntext-muted-foreground nopacity-50 naria-selected:nbg-accent/50 naria-selected:ntext-muted-foreground naria-selected:nopacity-30",
        day_disabled: "ntext-muted-foreground nopacity-50",
        day_range_middle:
          "naria-selected:nbg-accent naria-selected:ntext-accent-foreground",
        day_hidden: "ninvisible",
        ...classNames,
      }}
      // SVG 출력이 되지 않아 추후에 수정필요
      // components={{
      //   IconLeft: ({ ...props }) => <ChevronLeft className="nh-4 nw-4" />,
      //   IconRight: ({ ...props }) => <ChevronRight className="nh-4 nw-4" />,
      // }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
