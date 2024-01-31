import { useEffect, useState } from "react";

const SECOND_TO_MILLISECONDS = 1000;

function TodoList() {
  const [ date, setDate] = useState(new Date());

  useEffect(() => {
      const timerId = setInterval(() => {
          setDate(new Date());
      }, SECOND_TO_MILLISECONDS);
      return () => clearInterval(timerId);
  }, []);

  const dayOfWeek = date.toLocaleString('ko', { weekday: 'short' });
  const monthDay = date.toLocaleString('ko', { day: 'numeric' });

  return (
    <div className="nflex nitems-center nbg-blue-100 nrounded-xl np-4 nspace-x-4">
      <div className="nbg-white nrounded-lg np-2">
        <p className="ntext-sm nfont-bold">{`${monthDay}(${dayOfWeek})`}</p>
      </div>
      <div className="nflex-1 nbg-white nrounded-lg np-2">
        <p className="ntext-sm nfont-medium">11차 멘토링 <br /> 서비스 분석 회의 </p>
      </div>
    </div>
  );
}

export { TodoList }
