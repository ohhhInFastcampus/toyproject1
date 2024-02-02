import React, { useState } from "react";
import AbsenceRequestDetails from "@/containers/absenceRequestDetails";
import {
  defaultValue,
  headers,
  selectItem,
  tableData,
} from "@/mocks/absenceDetail";

export default function AbsenceRequestDetailsContainer() {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const getValue: React.Dispatch<React.SetStateAction<string>> = (value) => {
    setSelectedValue(value); // 단순히 전달받은 값을 상태로 설정합니다.
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
