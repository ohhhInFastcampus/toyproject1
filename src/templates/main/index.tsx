import { useState } from "react";
import MainJobState from "@/components/main/MainJobState";

const Main = () => {
  const [switchState, setSwitchState] = useState(false);
  // 스위치 상태 변경 함수
  const handleSwitchChange = (newState: boolean) => {
    setSwitchState(newState);
  };
  return (
    <>
      <MainJobState
        onSwitchChange={handleSwitchChange}
        switchState={switchState}
      />
    </>
  );
};

export default Main;
