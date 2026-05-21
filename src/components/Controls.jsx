function Controls({
  onStart,
  onPause,
  onReset,
  startDisabled,
  pauseDisabled,
  resetDisabled,
}) {
  return (
    <div className="controls-container">
      <button 
        className="btn-start" 
        onClick={onStart} 
        disabled={startDisabled}
      >
        ▶ Start
      </button>
      <button 
        className="btn-pause" 
        onClick={onPause} 
        disabled={pauseDisabled}
      >
        ⏸ Pause
      </button>
      <button 
        className="btn-reset" 
        onClick={onReset} 
        disabled={resetDisabled}
      >
        ↻ Reset
      </button>
    </div>
  );
}

export default Controls;