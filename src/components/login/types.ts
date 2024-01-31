export interface LoginDetailType {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}