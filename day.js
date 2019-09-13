function dayName(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
    }

function greeting(date) {
	const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"];
    return "Hello World, happy " + daysOfTheWeek[date.getDay()];
}