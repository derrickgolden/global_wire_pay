function formatDateAndTime(dateTimeString) {
    // Parse the input date and time string
    const dateTime = new Date(dateTimeString);
  
    // Format time as "hh:mm a" (e.g., "03:00 PM")
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedTime = dateTime.toLocaleTimeString('en-US', timeOptions);
  
    // Format date as "DD MMM YYYY" (e.g., "10 Mar 2022")
    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = dateTime.toLocaleDateString('en-US', dateOptions);
  
    return { time: formattedTime, date: formattedDate };
  }
  
  export default formatDateAndTime;
  