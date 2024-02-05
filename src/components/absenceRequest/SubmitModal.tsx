import {ModalPropsType} from "@/components/absenceRequest/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

const SubmitModal = ({ open, onClose }: ModalPropsType) => {
  return (
    <AlertDialog open={open} >
      <AlertDialogContent>
        <AlertDialogDescription>
          부재 신청이 완료되었습니다.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SubmitModal;
