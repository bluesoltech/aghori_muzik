import { useCallback, useEffect, useRef, useState } from "react";
const Timmer = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //   console.log(countDownTime);

  const minuteCircle = useRef();
  const secondCircle = useRef();
  const hourCircle = useRef();
  const daysCircle = useRef();

  const changeCircleoffset = (seconds, minutes, hours, days) => {
    if (daysCircle.current) {
      daysCircle.current.style.strokeDashoffset = `${
        days > 0 ? 440 - (days * 440) / 365 : 440
      }px`;
      hourCircle.current.style.strokeDashoffset = `${
        hours > 0 ? 451 - (hours * 451) / 24 : 451
      }px`;
      minuteCircle.current.style.strokeDashoffset = `${
        minutes > 0 ? 451 - (minutes * 451) / 60 : 451
      }px`;
      secondCircle.current.style.strokeDashoffset = `${
        seconds > 0 ? 451 - (seconds * 451) / 60 : 451
      }px`;
    }
  };

  const getTimeDifference = useCallback((countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownDate - currentTime;
    const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
    if (timeDiffrence < 0) {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval();
    } else {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  }, []);
  const startCountDown = useCallback(() => {
    const customDate = new Date("24 May 2024");
    console.log(customDate);
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate(),
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds()
    );
    console.log(countDownDate);
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [getTimeDifference]);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center"
      style={{
        backgroundImage: "linear-gradient(to right, #161928 40%, #4E598E 100%)",
      }}
    >
      <div className="relative flex items-center justify-center">
        <svg className="-rotate-90 h-48 w-48 flex items-center justify-center">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[#c8a651] stroke-[2px]"
          ></circle>
          <circle
            r="70"
            ref={daysCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "440px",
            }}
            className="fill-transparent stroke-white  stroke-[2px]"
          ></circle>
        </svg>
        <div className="text-white top-0 left-0 absolute w-full h-full text-[18px] font-semibold flex flex-col justify-center items-center">
          <span className="text-center pr-2 pt-2 font-light">
            {countDownTime?.days}
          </span>
          <span className="text-center pr-2 font-light">
            {countDownTime?.days == 1 ? "Day" : "Days"}
          </span>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <svg className="-rotate-90 h-48 w-48 flex items-center justify-center">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[#c8a651] stroke-[2px]"
          ></circle>
          <circle
            r="70"
            ref={hourCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "440px",
            }}
            className="fill-transparent stroke-white  stroke-[2px]"
          ></circle>
        </svg>
        <div className="text-white top-0 left-0 absolute w-full h-full text-[18px] font-semibold flex flex-col justify-center items-center">
          <span className="text-center pr-2 pt-2 font-light">
            {countDownTime?.hours}
          </span>
          <span className="text-center pr-2 font-light">
            {countDownTime?.hours == 1 ? "Hour" : "Hours"}
          </span>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <svg className="-rotate-90 h-48 w-48 flex items-center justify-center">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[#c8a651] stroke-[2px]"
          ></circle>
          <circle
            r="70"
            ref={minuteCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "440px",
            }}
            className="fill-transparent stroke-white  stroke-[2px]"
          ></circle>
        </svg>
        <div className="text-white top-0 left-0 absolute w-full h-full text-[18px] font-semibold flex flex-col justify-center items-center">
          <span className="text-center pr-2 pt-2 font-light">
            {countDownTime?.minutes}
          </span>
          <span className="text-center pr-2 font-light">
            {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
          </span>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <svg className="-rotate-90 h-48 w-48 flex items-center justify-center">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[#c8a651] stroke-[2px]"
          ></circle>
          <circle
            r="70"
            ref={secondCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "440px",
            }}
            className="fill-transparent stroke-white  stroke-[2px]"
          ></circle>
        </svg>
        <div className="text-white top-0 left-0 absolute w-full h-full text-[18px] font-semibold flex flex-col justify-center items-center">
          <span className="text-center pr-2 pt-2 font-light">
            {countDownTime?.seconds}
          </span>
          <span className="text-center pr-2 font-light">
            {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Timmer;
