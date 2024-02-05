export interface RequestDetailType {
  type : string,
  input : string,id: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled? : boolean
}
export interface ModalPropsType {
  open: boolean;
  onClose: () => void;
}