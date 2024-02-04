import {useEffect, useState} from "react";
import AbsenceRequestDetails from "@/templates/absenceRequestDetails";
import {
  defaultValue,
  headers,
  selectItem,
  // tableData,
} from "@/mocks/absenceDetail";
import {getAbsenceRequestDetails, getAbsenceRequestDetailsFilter} from "@/utils/absenceRequest.ts";
interface MockData {
  [key: string]: string[];
}
const parsingAbsenceTimeToString = (time :number) => {
  if(time === 4) return "반차";
  else return "연차"
}
export default function AbsenceRequestDetailsContainer() {
  // 상태를 선언하지만 현재는 사용되지 않음. 추후 사용 예정이므로 유지.
  // const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const [absenceRequestList,setAbsenceRequestList] = useState<MockData>({})
  // selectedValue 상태를 업데이트하는 함수. 현재 이 함수는 AbsenceRequestDetails 컴포넌트로 전달되고 있음.
  const [value, getValue] = useState('');
  const filterData =  async (key: string, value : string) => {
    if(key.length === 0) {
      let newList = absenceRequestList;
      const response = await getAbsenceRequestDetails();
      response.map((item,index)=>{
        let arr:MockData = {
          [index] : [item.name, item.date, item.position,parsingAbsenceTimeToString(item.absenceTime) , item.approver ]
        }
        newList = {...newList, ...arr};
      })
      setAbsenceRequestList(newList);
      console.log(newList,"newList")
    } else {
      const response = await getAbsenceRequestDetailsFilter(key, value);
      let newList  : MockData = {};
      response.map((item, index)=>{
        let arr:MockData = {
          [index] : [item.name, item.date, item.position,parsingAbsenceTimeToString(item.absenceTime) , item.approver ]
        }
        newList = {...newList, ...arr};
      })
      setAbsenceRequestList(newList);
      console.log(newList,"newList in ")
    }
  }
  useEffect(() => {
    if(value !== "all") {
      filterData('absenceTime',value)
    } else {
      filterData('',value)
    }
  }, [value]);
  useEffect(()=>{
    getAbsenceRequestDetails().then((list)=>{
      let newList = absenceRequestList;
      list.map((item,index)=>{
        let arr:MockData = {
           [index] : [item.name, item.date, item.position,parsingAbsenceTimeToString(item.absenceTime) , item.approver ]
        }
        newList = {...newList, ...arr};
      })
      setAbsenceRequestList(newList);
      console.log(newList,"newList")
    });
  }, [])
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
