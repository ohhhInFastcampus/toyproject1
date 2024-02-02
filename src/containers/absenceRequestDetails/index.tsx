import React from "react";
import AbsenceRequestDetails from "@/templates/absenceRequestDetails";
import {
  defaultValue,
  headers,
  selectItem,
  tableData,
} from "@/mocks/absenceDetail";

export default function AbsenceRequestDetailsContainer() {
  // 상태를 선언하지만 현재는 사용되지 않음. 추후 사용 예정이므로 유지.
  // const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  // selectedValue 상태를 업데이트하는 함수. 현재 이 함수는 AbsenceRequestDetails 컴포넌트로 전달되고 있음.
  const getValue: React.Dispatch<React.SetStateAction<string>> = (value) => {
    // setSelectedValue(value); // 이 부분을 주석 처리하여 ESLint 경고를 방지. 추후 필요시 주석 해제 예정.
    console.log(value); // 함수가 호출되는 것을 확인하기 위한 임시 코드. 실제 사용시 제거.
  };

  return (
    <AbsenceRequestDetails
      headers={headers}
      data={tableData}
      defaultValue={defaultValue}
      selectItem={selectItem}
      getValue={getValue}
    />
  );
}
