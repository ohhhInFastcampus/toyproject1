export interface MemberDetailType {
  profile: string;
  name: string;
  department: string;
  role: string;
  isWorking: "working" | "not working";
  startTime: string;
  endTime: string;
}

//TODO 데이터 타입 교정 필요
export interface MemberDetailTypes extends MemberDetailType {
  email: string;
}
