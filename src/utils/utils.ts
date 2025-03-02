export function getRelativeTime(date?: string) {
	if (!date) return;
  const now = new Date();
  const inputDate = new Date(date);

  // Calculate the difference in seconds
  const deltaSeconds = Math.floor((inputDate - now) / 1000);

  // Define time units in seconds
  const units = [
    { unit: 'year', seconds: 60 * 60 * 24 * 365 },
    { unit: 'month', seconds: 60 * 60 * 24 * 30 },
    { unit: 'week', seconds: 60 * 60 * 24 * 7 },
    { unit: 'day', seconds: 60 * 60 * 24 },
    { unit: 'hour', seconds: 60 * 60 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 }
  ];

  // Find the most appropriate time unit
  for (const { unit, seconds } of units) {
    const delta = Math.floor(deltaSeconds / seconds);
    if (Math.abs(delta) >= 1) {
      const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
      return rtf.format(delta, unit);
    }
  }

  return 'just now'; // Fallback for very small differences
}

// Example usage
const date = "Mon Dec 16 2024 11:00:28 GMT+0200 (Israel Standard Time)";
console.log(getRelativeTime(date)); // Output: "2 months ago"
