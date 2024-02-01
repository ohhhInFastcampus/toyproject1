export interface MemberDetailType {
  profile: string;
  name: string;
  department: string;
  role: string;
  isWorking: "working" | "not working";
  startTime: string;
  endTime: string;
}
