import { useEffect, useState } from "react";
import Stopwatch from "./features/Stopwatch";
import Timer from "./features/Timer";

function App() {
  const [activeView, setActiveView] = useState("stopwatch");

  // Stopwatch state
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);

  // Timer state
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [timerRemaining, setTimerRemaining] = useState(0);
  const [timerInitial, setTimerInitial] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  // Combined interval - runs regardless of which tab is active
  useEffect(() => {
    let interval;

    if (stopwatchRunning || timerRunning) {
      interval = setInterval(() => {
        if (stopwatchRunning) {
          setStopwatchTime((prev) => prev + 1);
        }
        if (timerRunning && timerRemaining > 0) {
          setTimerRemaining((prev) => prev - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [stopwatchRunning, timerRunning, timerRemaining]);

  // Stop timer when it reaches 0
  useEffect(() => {
    if (timerRemaining === 0 && timerInitial > 0) {
      setTimerRunning(false);
    }
  }, [timerRemaining, timerInitial]);

  // Stopwatch handlers
  const handleStopwatchStart = () => setStopwatchRunning(true);
  const handleStopwatchPause = () => setStopwatchRunning(false);
  const handleStopwatchReset = () => {
    setStopwatchRunning(false);
    setStopwatchTime(0);
  };

  // Timer handlers
  const handleTimerHoursChange = (e) => setTimerHours(e.target.value);
  const handleTimerMinutesChange = (e) => setTimerMinutes(e.target.value);
  const handleTimerSecondsChange = (e) => setTimerSeconds(e.target.value);

  const handleTimerStart = () => {
    if (timerRemaining > 0) {
      setTimerRunning(true);
      return;
    }

    const totalSeconds =
      Number(timerHours) * 3600 + Number(timerMinutes) * 60 + Number(timerSeconds);

    if (totalSeconds === 0) return;

    setTimerInitial(totalSeconds);
    setTimerRemaining(totalSeconds);
    setTimerRunning(true);
  };

  const handleTimerPause = () => setTimerRunning(false);
  const handleTimerReset = () => {
    // If timer hasn't been started yet, clear the input fields
    if (timerInitial === 0) {
      setTimerHours("00");
      setTimerMinutes("00");
      setTimerSeconds("00");
    } else {
      // If timer was started, reset the countdown
      setTimerRunning(false);
      setTimerRemaining(timerInitial);
    }
  };

  return (
    <main>
      <h1>⏱ Stopwatch & Timer</h1>

      <nav className="tab-container">
        <button
          className={`tab-button ${activeView === "stopwatch" ? "active" : ""}`}
          onClick={() => setActiveView("stopwatch")}
        >
          ⏱ Stopwatch
        </button>
        <button
          className={`tab-button ${activeView === "timer" ? "active" : ""}`}
          onClick={() => setActiveView("timer")}
        >
          ⏰ Timer
        </button>
      </nav>

      {activeView === "stopwatch" && (
        <Stopwatch
          time={stopwatchTime}
          isRunning={stopwatchRunning}
          onStart={handleStopwatchStart}
          onPause={handleStopwatchPause}
          onReset={handleStopwatchReset}
        />
      )}
      {activeView === "timer" && (
        <Timer
          hours={timerHours}
          minutes={timerMinutes}
          seconds={timerSeconds}
          remainingTime={timerRemaining}
          initialTime={timerInitial}
          isRunning={timerRunning}
          onHoursChange={handleTimerHoursChange}
          onMinutesChange={handleTimerMinutesChange}
          onSecondsChange={handleTimerSecondsChange}
          onStart={handleTimerStart}
          onPause={handleTimerPause}
          onReset={handleTimerReset}
        />
      )}
    </main>
  );
}

export default App;