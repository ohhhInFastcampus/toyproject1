import {ModalPropsType} from "@/components/absenceRequest/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

const LoginModal = ({ open, onClose }: ModalPropsType) => {
  return (
    <AlertDialog open={open} >
      <AlertDialogContent>
        <AlertDialogDescription>
          관리자에게 문의하십시오.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoginModal;
