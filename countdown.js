function startCountdown(duration) {
  let time = duration; // time in seconds

  const countdownInterval = setInterval(() => {
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    // Format the time as HH:MM:SS
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    console.log(formattedTime); // Display the countdown time (or update the UI)

    if (time <= 0) {
      clearInterval(countdownInterval); // Stop the countdown when time reaches zero
      console.log("Countdown finished!");
    }

    time--; // Decrease time by 1 second
  }, 1000); // Repeat every 1000 ms (1 second)
}

// Start countdown for 10 minutes (600 seconds)
startCountdown(600);
