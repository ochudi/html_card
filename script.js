function updateCurrentTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    
    // Get the current time in UTC and format it
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString('en-US', {
        weekday: 'long', // Full weekday name (e.g., Monday)
        year: 'numeric',
        month: 'long', // Full month name (e.g., February)
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short', // e.g., UTC
        hour12: false // 24-hour time format
    });

    currentTimeElement.textContent = `Current Time (UTC): ${formattedTime}`;
}

// Update the time when the page loads
updateCurrentTime();

// Optionally, you can set a timer to refresh the time every second
setInterval(updateCurrentTime, 1000);
