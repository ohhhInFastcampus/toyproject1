import DataTable from "@/components/DataTable";
import SelectBox from "@/components/SelectBox";

import React from "react";

interface SelectPropsType {
  //기본값 (아무것도 정하지 않았을 때 selectBox에서 출력하는 값)
  defaultValue: string;
  //select content 에 들어갈 리스트
  selectItem: SelectContentsItem[];
  //getValue => setter
  getValue: React.Dispatch<React.SetStateAction<string>>;
}

interface SelectContentsItem {
  //content 에 들어갈 리스트에서
  // ui에 출력될 값 => name
  // 서버에 보낼 값 => value
  name: string;
  value: string;
}

interface AbsenceRequestDetailsProps extends SelectPropsType {
  headers: string[];
  data: { [key: string]: string[] };
}

export default function AbsenceRequestDetails({
  headers,
  data,
  defaultValue,
  selectItem,
  getValue,
}: AbsenceRequestDetailsProps) {
  return (
    <>
      <div className="nflex nflex-col w-fit np-16">
        <h2 className="ntext-2xl nfont-semibold">부재신청 내역</h2>
        <div className="npy-24 nw-1/4 nmin-w-40 njustify-self-end nself-end">
          <SelectBox
            defaultValue={defaultValue}
            selectItem={selectItem}
            getValue={getValue}></SelectBox>
        </div>
        <div className="nmin-w-40 noverflow-x-auto">
          <DataTable headers={headers} data={data}></DataTable>
        </div>
      </div>
    </>
  );
}
