import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface MainSwitchModalProps {
  onSwitchChange: (checked: boolean) => void; // 'onSwitchChange' 함수의 타입 정의
  switchState: boolean; // 'switchState' 상태의 타입 정의
}

export default function MainSwitchModal({
  onSwitchChange,
  switchState,
}: MainSwitchModalProps) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    onSwitchChange(checked); // 상위 컴포넌트에 상태 변경을 전달합니다.
    setIsAlertOpen(true); // AlertDialog를 엽니다.
  };

  return (
    <>
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogTrigger asChild>
          <div className="nw-fit nflex nitems-center">
            <Switch
              checked={switchState}
              onCheckedChange={handleSwitchChange}
            />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="ntext-3xl np-5">
              {switchState ? "근무를 시작합니다" : "근무를 끝냅니다"}
            </AlertDialogTitle>
            <AlertDialogDescription className="ntext-lg np-5 nbreak-keep">
              근무 종료 후에는 다시 시작할 수 없으니 유의바랍니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => onSwitchChange(!switchState)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => ""}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
