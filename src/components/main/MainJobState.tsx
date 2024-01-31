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
      <div className="nflex nflex-row nbg-yellow-300 nrounded-xl np-3 nitems-center">
        <div className="">
          <MainSwitchModal
            onSwitchChange={onSwitchChange}
            switchState={switchState}
          />
        </div>
        <div className="ngrow ntext-center nfont-semibold">
          {switchState ? <p>#근무중</p> : <p>#부재중</p>}
        </div>
      </div>
    </>
  );
}
