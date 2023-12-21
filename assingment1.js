var event;
var gender;
var time;
var windSpeed;
var windDirection;

// Function to sanitize input and convert it to lowercase
function sanitizeInput(input) {
  return input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

do {
  var input = prompt("Please enter your event (e.g., 100 meters, 2000 meters):");

  if (input !== null) {
    var sanitizedInput = sanitizeInput(input);

    if (sanitizedInput === "100m" || sanitizedInput === "100meters") {
      event = "100m";
      break;
    } else if (sanitizedInput === "2000m" || sanitizedInput === "2000meters") {
      event = "2000m";
      break;
    } else {
      alert("Invalid input. Please enter '100 meters' or '2000 meters'.");
    }
  } else {
    alert("You canceled the input. Please try again.");
  }
} while (true);

// Rest of your code remains unchanged

do {
  input = prompt("Please enter your gender (e.g., Men's, Women's):");

  if (input !== null) {
    var sanitizedInput = sanitizeInput(input);

    if (sanitizedInput === "mens" || sanitizedInput === "womens") {
      gender = sanitizedInput;
      break;
    } else {
      alert("Invalid input. Please enter 'Men's' or 'Women's'.");
    }
  } else {
    alert("You canceled the input. Please try again.");
  }
} while (true);

do {
  input = prompt("Please enter your time in seconds (e.g., 10.5 seconds):");

  if (input !== null) {
    // Convert the input to a float (assuming it's a valid number)
    time = parseFloat(input);
    if (!isNaN(time)) {
      break;
    } else {
      alert("Invalid input. Please enter a valid time in seconds.");
    }
  } else {
    alert("You canceled the input. Please try again.");
  }
} while (true);

if (event === "100m") {
  do {
    input = prompt("Please enter the wind speed (e.g., 2.0 m/s):");

    if (input !== null) {
      // Convert the input to a float (assuming it's a valid number)
      windSpeed = parseFloat(input);
      if (!isNaN(windSpeed)) {
        break;
      } else {
        alert("Invalid input. Please enter a valid wind speed in m/s.");
      }
    } else {
      alert("You canceled the input. Please try again.");
    }
  } while (true);

  if (windSpeed > 2) {
    do {
      input = prompt("Was the wind direction a headwind or a tailwind? Please enter headwind or tailwind:");

      if (input !== null) {
        var sanitizedInput = sanitizeInput(input);

        if (sanitizedInput === "headwind" || sanitizedInput === "tailwind") {
          windDirection = sanitizedInput;
          break;
        } else {
          alert("Invalid input. Please enter 'headwind' or 'tailwind'.");
        }
      } else {
        alert("You canceled the input. Please try again.");
      }
    } while (true);
  }
}

console.log("User's selected event:", event);
console.log("User's gender:", gender);
console.log("User's time:", time);
if (event === "100m") {
  console.log("Wind speed:", windSpeed);
} 
if (event === "100m" && windSpeed > 2) {
  console.log("Wind direction:", windDirection);
}

var men100mWorldRecord = 9.58; // Men's 100m world record in seconds
var women100mWorldRecord = 10.49; // Women's 100m world record in seconds
var men2000mWorldRecord = 283.13; // Men's 2000m world record in seconds
var women2000mWorldRecord = 321.56; // Women's 2000m world record in seconds

var hasBrokenWorldRecord = false; // Initialize a Boolean variable

if (event === "100m") {
  if (gender === "mens" && time < men100mWorldRecord && !(windSpeed > 2 && windDirection === "tailwind")) {
    hasBrokenWorldRecord = true;
  } else if (gender === "womens" && time < women100mWorldRecord && !(windSpeed > 2 && windDirection === "tailwind")) {
    hasBrokenWorldRecord = true;
  }
} else if (event === "2000m") {
  if (gender === "mens" && time < men2000mWorldRecord) {
    hasBrokenWorldRecord = true;
  } else if (gender === "womens" && time < women2000mWorldRecord) {
    hasBrokenWorldRecord = true;
  }
}

if (hasBrokenWorldRecord) {
  console.log("Congratulations! You have broken the world record!");
} else {
  console.log("You have not broken the world record.");
}





