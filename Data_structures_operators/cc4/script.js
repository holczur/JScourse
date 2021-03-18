/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

/*
  ✔ Click event for button
    onclick save textarea input as an array
  
  camelCase function
    transform all element to lowercase
    check if string contins underscore --> NO: return string
      YES:
        define the index of underscore (i)
        delete underscore
        replace letter in position 'i' with its uppercase version
        return transformed string
*/

const button = document.querySelector('button');
const textarea = document.querySelector('textarea');

const camelCase = function (arr) {
  const low = [];
  const correct = [];
  for (a of arr) {
    low.push(a.trim().toLowerCase().split('_'));
  }
  for (let i = 0; i < low.length; i++) {
    low[i][1] = low[i][1][0].toUpperCase() + low[i][1].slice(1);
    correct.push(low[i][0] + low[i][1]);
  }

  for (let i = 0; i < correct.length; i++) {
    console.log(correct[i].padEnd(20) + '✅'.repeat(i + 1));
  }
};

button.addEventListener('click', () => {
  input = textarea.value.split(/\n/);
  camelCase(input);
});
