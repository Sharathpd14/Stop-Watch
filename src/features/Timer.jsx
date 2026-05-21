import TimeInput from "../components/TimeInput";
import TimeDisplay from "../components/TimeDisplay";
import Controls from "../components/Controls";
import formatTime from "../utils/formatTime";

function Timer({
  hours,
  minutes,
  seconds,
  remainingTime,
  initialTime,
  isRunning,
  onHoursChange,
  onMinutesChange,
  onSecondsChange,
  onStart,
  onPause,
  onReset,
}) {
  return (
    <section>
      <h2>⏰ Timer</h2>
      <TimeInput
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        onHoursChange={onHoursChange}
        onMinutesChange={onMinutesChange}
        onSecondsChange={onSecondsChange}
        disabled={isRunning}
      />
      <TimeDisplay time={formatTime(remainingTime)} />
      <Controls
        onStart={onStart}
        onPause={onPause}
        onReset={onReset}
        startDisabled={remainingTime === 0 && !(Number(hours) || Number(minutes) || Number(seconds))}
        pauseDisabled={!isRunning}
        resetDisabled={false}
      />
    </section>
  );
}

export default Timer;
