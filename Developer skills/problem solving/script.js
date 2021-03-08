'use strict'

/*
PROBLEM1:
We work for a company building smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

/*
1) Understanding the problem
    - What is temperature amplitude? - Difference between lowest and highest value.
    - How to compute max and min temp? - Math.max(...arr) / Math.min(...arr)
    - Should be a sign when error occure, or just simply ignore it? - Just ignore it.

2) Breaking up into sub-problems
    - Check for errors, ignore them if there's any
    - Get highest value of an array
    - Get lowest value of an array
    - Substract to get the difference
    - Return the difference
*/

const calcTempAmp = function (temps) {
  let min = temps[0]
  let max = temps[0]

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i]
    if (typeof curTemp !== 'number') continue
    if (curTemp < min) min = curTemp
    if (curTemp > max) max = curTemp
  }
  return max - min
}

const amplitude = calcTempAmp(temperatures)
console.log(amplitude)

/*
PROBLEM2:
Function should now recives 2 array of temps
*/

const temperatures2 = [-4, -2, 6, 1, 'error', 0, -1, 1, 3, 7, 9, -11]

/*
1) Understanding the problem
    - With two arrays should we get two amplitudes, or should the function calculate the amplitude of amplitudes? - NO the function should merge the arrays, to calculate the amplitude
    - How to merge two arrays?

2) Breaking up into sub-problems
    - merge arrays and give the value to the existing function
*/

const calcMultipleTempAmp = function (temps1, temps2) {
  let temps3 = temps1.concat(temps2)

  let min = temps3[0]
  let max = temps3[0]

  for (let i = 0; i < temps3.length; i++) {
    let curTemp = temps3[i]
    if (typeof curTemp !== 'number') continue
    if (curTemp < min) min = curTemp
    if (curTemp > max) max = curTemp
  }
  return max - min
}

const amplitudeFromTwoArrays = calcMultipleTempAmp(temperatures, temperatures2)
console.log(amplitudeFromTwoArrays)
