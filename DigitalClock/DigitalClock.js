function updateClock() {
  // Get current time
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Convert to 12-hour format
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // If hours is 0, set to 12

  // Add leading zeros if needed
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Format the time string
  const timeString = `${hours}:${minutes}:${seconds} ${period}`;

  // Update the clock display
  document.getElementById("time").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display time immediately
updateClock();
