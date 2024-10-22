function startStopwatch() {
  let time = 0; // Time in centiseconds (hundredths of a second)

  const stopwatchInterval = setInterval(() => {
    time++; // Increment time by 1 centisecond (100th of a second)

    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    // Format time as HH:MM:SS:MS
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
      milliseconds
    ).padStart(2, "0")}`;

    console.log(formattedTime); // Display or update stopwatch time in UI
  }, 10); // Repeat every 10ms (centisecond)

  // Return function to stop the stopwatch
  return function stopStopwatch() {
    clearInterval(stopwatchInterval);
    console.log("Stopwatch stopped!");
  };
}

// Start the stopwatch
const stop = startStopwatch();

// Call stop() to stop the stopwatch when needed
