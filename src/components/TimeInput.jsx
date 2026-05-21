function TimeInput({
  hours,
  minutes,
  seconds,
  onHoursChange,
  onMinutesChange,
  onSecondsChange,
  disabled,
}) {
  return (
    <div className="time-input-container">
      <div className="time-input-group">
        <input
          type="number"
          min="0"
          max="99"
          value={hours}
          onChange={onHoursChange}
          disabled={disabled}
          placeholder="00"
        />
        <div className="time-label">Hours</div>
      </div>

      <span className="time-separator">:</span>

      <div className="time-input-group">
        <input
          type="number"
          min="0"
          max="59"
          value={minutes}
          onChange={onMinutesChange}
          disabled={disabled}
          placeholder="00"
        />
        <div className="time-label">Minutes</div>
      </div>

      <span className="time-separator">:</span>

      <div className="time-input-group">
        <input
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={onSecondsChange}
          disabled={disabled}
          placeholder="00"
        />
        <div className="time-label">Seconds</div>
      </div>
    </div>
  );
}

export default TimeInput;
