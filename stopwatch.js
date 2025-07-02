function startStopwatch(initialSeconds = 0) {
  let time = initialSeconds; // Time in seconds

  const stopwatchInterval = setInterval(() => {
    time++; // Increment time by 1 second

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    // Format time as HH:MM:SS
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    console.log(formattedTime); // Display or update stopwatch time in UI
  }, 1000); // Repeat every 1000ms (1 second)

  // Return function to stop the stopwatch
  return function stopStopwatch() {
    clearInterval(stopwatchInterval);
    console.log("Stopwatch stopped!");
  };
}

// Start the stopwatch
const stop = startStopwatch();

// Call stop() to stop the stopwatch when needed
