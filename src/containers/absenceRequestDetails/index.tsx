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
import PaginationCreate from "@/components/PaginationCreate";
import moment from "moment";

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
        moment(item.date).format("YYYY-MM-DD"),
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 15;

  const filterData = async (key: string, value: string) => {
    const response =
      key.length === 0
        ? await getAbsenceRequestDetails()
        : await getAbsenceRequestDetailsFilter(key, value);
    // const newList = processAbsenceRequestData(response);

    const totalItems = response.length;
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
    const newList = processAbsenceRequestData(
      response.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    );
    setAbsenceRequestList(newList);
  };
  useEffect(() => {
    getAbsenceRequestDetails().then((list) => {
      const newList = processAbsenceRequestData(list);
      setAbsenceRequestList(newList);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // 필터링 로직이 여기에 들어갑니다.
      if (value !== "all") {
        await filterData("absenceTime", value);
      } else {
        await filterData("", value);
      }
    };
    fetchData();
  }, [value, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [value]);

  return (
    <>
      <AbsenceRequestDetails
        headers={headers}
        data={absenceRequestList}
        defaultValue={defaultValue}
        selectItem={selectItem}
        getValue={getValue}
      />
      <PaginationCreate
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
