import { useEffect, useState } from "react";
import AbsenceRequestDetails from "@/templates/absenceRequestDetails";
import {
  defaultValue,
  headers,
  selectItem,
  // tableData,
} from "@/mocks/absenceDetail";
import {
  getAbsenceRequestDetails,
  getAbsenceRequestDetailsFilter,
} from "@/utils/absenceRequest.ts";
interface MockData {
  name: string;
  date: string;
  position: string;
  absenceTime: number;
  halfDayTime: string;
  approver: string;
}

type ProcessedData = { [key: string]: string[] };

const AbsenceTimeToString: { [key: number]: string } = {
  4: "반차",
  8: "연차",
};
const parsingAbsenceTimeToString = (time: number) => {
  return AbsenceTimeToString[time];
};

const processAbsenceRequestData = (response: MockData[]): ProcessedData => {
  return response.reduce(
    (acc, item, index) => ({
      ...acc,
      [index]: [
        item.name,
        item.date,
        item.position,
        parsingAbsenceTimeToString(item.absenceTime),
        item.halfDayTime,
        item.approver,
      ],
    }),
    {}
  );
};

export default function AbsenceRequestDetailsContainer() {
  const [absenceRequestList, setAbsenceRequestList] = useState<ProcessedData>(
    {}
  );
  // selectedValue 상태를 업데이트하는 함수. 현재 이 함수는 AbsenceRequestDetails 컴포넌트로 전달되고 있음.
  const [value, getValue] = useState("");

  const filterData = async (key: string, value: string) => {
    const response =
      key.length === 0
        ? await getAbsenceRequestDetails()
        : await getAbsenceRequestDetailsFilter(key, value);
    const newList = processAbsenceRequestData(response);
    setAbsenceRequestList(newList);
  };

  useEffect(() => {
    if (value !== "all") {
      filterData("absenceTime", value);
    } else {
      filterData("", value);
    }
  }, [value]);

  useEffect(() => {
    getAbsenceRequestDetails().then((list) => {
      const newList = processAbsenceRequestData(list);
      setAbsenceRequestList(newList);
    });
  }, []);

  return (
    <AbsenceRequestDetails
      headers={headers}
      data={absenceRequestList}
      defaultValue={defaultValue}
      selectItem={selectItem}
      getValue={getValue}
    />
  );
}
