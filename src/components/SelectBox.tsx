import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

//props로 받을 값
interface SelectPropsType {
    //기본값 (아무것도 정하지 않았을 때 selectBox에서 출력하는 값)
    defaultValue: string,
    //select content 에 들어갈 리스트
    selectItem: SelectContentsItem[],
    //getValue => setter
    getValue: React.Dispatch<React.SetStateAction<string>>
}

interface SelectContentsItem {
    //content 에 들어갈 리스트에서
    // ui에 출력될 값 => name
    // 서버에 보낼 값 => value
    name: string,
    value: string
}

const SelectBox = ({defaultValue, selectItem, getValue}: SelectPropsType) => {
    return (
        <Select onValueChange={(value) => {
            getValue(value);
        }}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={defaultValue}/>
            </SelectTrigger>
            <SelectContent>
                {
                    selectItem.map((item) => {
                        return (
                            <SelectItem value={item.value} key={item.value}>{item.name}</SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select>
    )
}

export default SelectBox;