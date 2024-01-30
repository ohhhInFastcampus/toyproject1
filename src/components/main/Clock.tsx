import { useEffect, useState } from "react";

function Clock() {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setClock(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    //시계 초침 위치가 맞지 않아 수정 필요
    // const minutes = clock.getMinutes();
    // const hours = clock.getHours();
    // const minuteHandAngle = minutes * 6;
    // const hourHandAngle = (hours % 12) * 30 + minutes * 0.5; 

    const dayOfWeek = clock.toLocaleString('en-US', { weekday: 'short' });
    const monthDay = clock.toLocaleString('en-US', { month: 'short', day: 'numeric' });
    const hourMinute = clock.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    return (
        <div className="nflex nitems-center">
            <div>
                <p className="ntext-lg nfont-medium">{`${dayOfWeek}, ${monthDay}`}</p>
                <p className="ntext-3xl nfont-semibold">{hourMinute}</p>
            </div>
        </div>
        // 시계 초침 위치가 맞지 않아 수정 필요
        //     <div className="nrelative nw-16 nh-16 nborder-2 nborder-black nrounded-full nflex nitems-center njustify-center nmr-4">
        //         {/* Hour hand */}
        //         <div className="nabsolute nbg-black" style={{ width: '40%', height: '2px', transform: `translateX(-50%) rotate(${hourHandAngle}deg)`, transformOrigin: '0% 100%', bottom: '50%', left: '50%' }}></div>
        //         {/* Minute hand */}
        //         <div className="nabsolute nbg-black" style={{ width: '45%', height: '2px', transform: `translateX(-50%) rotate(${minuteHandAngle}deg)`, transformOrigin: '100% 0%', bottom: '50%', left: '50%'}}></div>
        //         {/* Center dot */}
        //         <div className="nabsolute nw-2 nh-2 nbg-black nrounded-full" style={{ bottom: '50%', left: '50%', transform: 'translate(-50%, 50%)' }}></div>
        //     </div>
    );
}

export { Clock }
