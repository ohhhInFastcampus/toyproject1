import {ModalPropsType} from "@/components/absenceRequest/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

const ErrorModal = ({ open, onClose }: ModalPropsType) => {
  return (
    <AlertDialog open={open} onClose={(e)=>{onClose()}}>
      <AlertDialogContent>
        <AlertDialogDescription>
        모든 사항을 기입하시기 바랍니다.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ErrorModal;
