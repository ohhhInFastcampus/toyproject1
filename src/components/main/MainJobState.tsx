import MainSwitchModal from "@/components/main/MainSwitchModal";

interface MainSwitchModalProps {
  onSwitchChange: (checked: boolean) => void; // 'onSwitchChange' 함수의 타입 정의
  switchState: boolean; // 'switchState' 상태의 타입 정의
}

export default function MainJobState({
  onSwitchChange,
  switchState,
}: MainSwitchModalProps) {
  return (
    <>
      <div className="nflex nflex-row nbg-yellow-300 nitems-center np-4 nrounded-full ntext-2xl ">
        <div className="">
          <MainSwitchModal
            onSwitchChange={onSwitchChange}
            switchState={switchState}
          />
        </div>
        <div className="ngrow ntext-center font-light  ntracking-[0.25rem] font-Inter">
          {switchState ? <p>#Working</p> : <p># ZZZ...</p>}
        </div>
      </div>
    </>
  );
}
