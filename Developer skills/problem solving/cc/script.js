/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK �
*/

const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

// 1) UNDERSTANDING THE PROBLEM
//      - How to transform array to string - arr.toString();
//      - How to change each items in the array to a string? - Use a for loop
//      - How to add text to the array items? - Use template literals

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `... ${arr[i].toString()}ºC in ${i + 1} days `
  }
  console.log(arr.toString())
}
