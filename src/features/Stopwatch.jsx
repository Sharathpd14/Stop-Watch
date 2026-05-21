import TimeDisplay from "../components/TimeDisplay";
import Controls from "../components/Controls";
import formatTime from "../utils/formatTime";

function Stopwatch({ time, isRunning, onStart, onPause, onReset }) {
  return (
    <section>
      <h2>⏱ Stopwatch</h2>
      <TimeDisplay time={formatTime(time)} />
      <Controls
        onStart={onStart}
        onPause={onPause}
        onReset={onReset}
        startDisabled={isRunning}
        pauseDisabled={!isRunning}
        resetDisabled={time === 0}
      />
    </section>
  );
}

export default Stopwatch;
