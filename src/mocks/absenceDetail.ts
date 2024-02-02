// 목업 데이터 타입 정의
interface MockData {
  [key: string]: string[];
}

interface SelectContentsItem {
  label: string;
  value: string;
  name: string; // 'SelectContentsItem' 인터페이스에서 요구하는 추가적인 속성
}

// 목업 데이터
const headers: string[] = ["신청일", "부재 유형", "시작일", "종료일", "상태"];
const tableData: MockData = {
  1: ["2022-01-01", "개인 사유", "2022-01-02", "2022-01-05", "승인"],
  2: ["2022-02-15", "공식 출장", "2022-02-16", "2022-02-20", "대기중"],
  3: ["2022-03-20", "병가", "2022-03-21", "2022-03-25", "승인"],
  4: ["2022-04-10", "개인 사유", "2022-04-12", "2022-04-15", "거절"],
  5: ["2022-05-05", "공식 출장", "2022-05-06", "2022-05-10", "승인"],
  6: ["2022-06-01", "병가", "2022-06-02", "2022-06-06", "대기중"],
  7: ["2022-07-07", "개인 사유", "2022-07-08", "2022-07-12", "승인"],
  8: ["2022-08-15", "공식 출장", "2022-08-16", "2022-08-20", "승인"],
  9: ["2022-09-09", "병가", "2022-09-10", "2022-09-14", "거절"],
  10: ["2022-10-10", "개인 사유", "2022-10-11", "2022-10-15", "승인"],
};

const defaultValue: string = "전체";
const selectItem: SelectContentsItem[] = [
  { label: "전체", value: "all", name: "전체" },
  { label: "승인", value: "approved", name: "승인" },
  { label: "대기중", value: "pending", name: "대기중" },
  { label: "거절", value: "rejected", name: "거절" },
];

export { headers, tableData, defaultValue, selectItem };