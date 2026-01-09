import "../css/Timer.css";
import { useState, useEffect, useRef } from "react";

function Timer({ sendNotification, changeQuote }) {
  const devMode = false;
  const getDate = () => {
    return Math.floor(Date.now() / 1000); /* Displays in seconds*/
  };

  const defaultTimer = {
    stageNum: 0,
    stage: "Focus",
    endTime: 60 * 25,
    isRunning: false,

    focusTime: 25 * 60,
    breakTime: 5 * 60,
    longBreakTime: 10 * 60,
    sessions: 3,
  };

  //Use ref so that we don't have lingering intervals
  const clockInterval = useRef(null);

  //Self explainatory
  const formatTime = (time) => {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);

    sec = sec >= 10 ? "" + sec : "0" + sec;
    // min = min >= 10 ? ""+min:"0"+min

    return min + ":" + sec;
  };

  const loadTimer = () => {
    try {
      const data = JSON.parse(localStorage.getItem("TimerData"));
      return data ?? defaultTimer;
    } catch {
      return defaultTimer;
    }
  };


  const loadRemaining = () => {
    try {
      const data = parseInt(localStorage.getItem("TimeRemaining"));
      if (data === null || isNaN(data)) { 
        return loadTimer().focusTime;
    }
      return data ?? loadTimer().focusTime;
    } catch {
      return loadTimer().focusTime;
    }
  };

  const [timer, setTimer] = useState(loadTimer);
  const [remaining, setRemaining] = useState(loadRemaining);
  const [formattedTime, setFormattedTime] = useState(
    formatTime(remaining)
  );
  useEffect(() => {
    localStorage.setItem("TimerData", JSON.stringify(timer));
  }, [timer]);

  useEffect(() => {
    localStorage.setItem("TimeRemaining", remaining);
  }, [remaining]);


  //Controls timer tick
  useEffect(() => {
    if (!timer.isRunning || !timer.endTime) return;

        const id = setInterval(() => {
        const remaining = timer.endTime - getDate();
        setRemaining(remaining);

        setFormattedTime(formatTime(remaining));
        document.title = `${formatTime(remaining)} • ${timer.stage}`;

        if (remaining <= 0) advanceStage();
        }, 1000);

        return () => clearInterval(id);
    }, [timer.isRunning, timer.endTime]);

  useEffect(() => {
    if (timer.stage == "Focus") {
      changeQuote();
    }
  }, [timer.stage]);

  // Timer Controls
  const startClock = (seconds) => {
    setTimer((t) => ({
      ...t,
      isRunning: true,
      endTime: getDate() + remaining,
    }));
  };

  const pauseClock = () => {
    setTimer((t) => ({
      ...t,
      isRunning: false,
      endTime: null, //loses it's realiability
    }));
  };

  const toggleClock = () => {
    if (timer.isRunning) pauseClock();
    else {
      const duration =
        timer.stage === "Focus"
          ? timer.focusTime
          : timer.stage === "Break"
          ? timer.breakTime
          : timer.longBreakTime;

      startClock(duration);
    }
  };
  /* Stage logic */
  const advanceStage = () => {
    let nextStageNum = timer.stageNum + 1;
    let stage = "Focus";
    let duration = timer.focusTime;

    //Odd stages = break, even = focus, 2 * session num - 1 = long break
    if (nextStageNum >= (2 * timer.sessions - 1)) {
      stage = "Long Break";
      duration = timer.longBreakTime;
      nextStageNum = -1;
    } else if (nextStageNum % 2 === 1) {
      stage = "Break";
      duration = timer.breakTime;
    }


    setFormattedTime(formatTime(duration));
    sendNotification?.({ stage, time: formatTime(duration) });

    setTimer((t) => ({
      ...t,
      stageNum: nextStageNum,
      stage,
      isRunning: true,
      endTime: getDate() + duration,
    }));
  };

  const playButtonText = timer.isRunning ? "Pause" : "Start";

  return (
    <>
      <div className="timer">
        <h2 className="stage">{timer.stage}</h2>
        {/* You can have conditional classnames*/}
        {/* !NOTICE we use ` it's not quotes */}

        <div className="timer-time">
          <h1 className={`timer-${timer.stage}`}>{formattedTime}</h1>
        </div>

        <div className="timer-buttons">
          <button onClick={toggleClock}>
            <h3>{playButtonText}</h3>
          </button>

          <button onClick={advanceStage}>
            <h3>Skip</h3>
          </button>

          {/* Reset Button
          <button
            onClick={() => {
              stopClock();
              console.log(stageNum);
              changeStage(0, true);
            }}
          >
            <h3>Reset</h3>
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Timer;
