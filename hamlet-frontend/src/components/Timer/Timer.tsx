import React, { useState, useEffect } from "react";

type TimeProps = {
  // mm : string
  ss : string
}

const Timer = ({ ss } : TimeProps) => { // mm,
  // const [minutes, setMinutes] = useState<string>(mm);
  const [seconds, setSeconds] = useState<string>(ss);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(String(parseInt(seconds) - 1));
      }
      // if (parseInt(seconds) === 0) {
      //   if (parseInt(minutes) === 0) {
      //       clearInterval(countdown);
      //   } else {
      //     setMinutes(String(parseInt(minutes) - 1));
      //     setSeconds('59');
      //   }
      // }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds]); // minutes,

  return (
    <div>
      {/* {minutes}:{parseInt(seconds) < 10 ? `0${seconds}` : seconds} */}
      {parseInt(seconds) < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
