import MainSwitchModal from "@/components/main/MainSwitchModal";

interface MainSwitchModalProps {
  onSwitchChange: (checked: boolean) => void; // 'onSwitchChange' 함수의 타입 정의
  switchState: boolean; // 'switchState' 상태의 타입 정의
  settingWorkingStatus : ()=>void
}

export default function MainJobState({
  onSwitchChange,
  switchState,
  settingWorkingStatus
}: MainSwitchModalProps) {
  return (
    <>
      <div className="nflex nflex-row nbg-yellow-200 nitems-center np-4 nrounded-full ntext-2xl ">
        <div className="">
          <MainSwitchModal
              settingWorkingStatus={settingWorkingStatus}
            onSwitchChange={onSwitchChange}
            switchState={switchState}
          />
        </div>
        <div className="ngrow ntext-center nfont-bold  ntracking-[0.25rem] font-Inter">
          {switchState ? <p>Active</p> : <p>Away</p>}
        </div>
      </div>
    </>
  );
}
