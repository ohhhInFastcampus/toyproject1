import { useEffect, useState } from "react";

const SECOND_TO_MILLISECONDS = 1000;

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, SECOND_TO_MILLISECONDS);
    return () => clearInterval(timerId);
  }, []);

  const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });
  const monthDay = date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });
  const hourMinute = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="nflex np-3 nitems-center">
      <div>
        <p className="ntext-lg nfont-medium">{`${dayOfWeek}, ${monthDay}`}</p>
        <p className="ntext-3xl nfont-semibold">{hourMinute}</p>
      </div>
    </div>
  );
}

export { Clock };
