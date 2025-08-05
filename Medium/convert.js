/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

// const TEMPERATURE_RANGE = {
//   "°F": { min: -459.67, max: 212 },
//   "°C": { min: -273.15, max: 100 },
// };

// function temperatureInRange(numberComponent, unitComponent) {
//   if (!(unitComponent in TEMPERATURE_RANGE)) throw new Error("unit not valid");

//   return (
//     numberComponent >= TEMPERATURE_RANGE[unitComponent].min &&
//     numberComponent <= TEMPERATURE_RANGE[unitComponent].max
//   );
// }

function convert(temp) {
  if (typeof temp !== "string") return "Error";

  const numberComponent = Number.parseInt(temp.slice(0, -2));
  if (Number.isNaN(numberComponent)) return "Error";

  const unitComponent = temp.slice(-2);
  if (!["°F", "°C"].includes(unitComponent)) return "Error";

  // if (!temperatureInRange(numberComponent, unitComponent)) return "Error"

  return unitComponent === "°F"
    ? Math.round((numberComponent - 32) / 1.8).toString() + "°C"
    : Math.round(numberComponent * 1.8 + 32).toString() + "°F";
}

exports.solution = convert;
