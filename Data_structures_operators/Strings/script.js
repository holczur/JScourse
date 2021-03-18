const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
    ? console.log('Middle seat')
    : console.log('Not middle seat');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//correcting
const nameCorrection = function (name) {
  const low = name.toLowerCase().split(' ');
  for (let i = 0; i < low.length; i++) {
    low[i] = low[i][0].toUpperCase() + low[i].slice(1); // each part of the name = nth item first letter toUpperCase() + nth item rest letters from the second one
  }
  const correct = low.join(' ');
  console.log(correct);
};

nameCorrection('KoVács laJOS aladár');

//comparing
const email = 'hello@jonas.io';

const compare = function (str) {
  const transformedEmail = str.toLowerCase().trim(); // string methods can be chained, because they return value
  console.log(transformedEmail === email);
};

compare('   Hello@Jonas.Io   \n');

//replace
const priceEU = '288,97€';
const priceUS = priceEU.replace('€', '$').replace(',', '.');
console.log(priceUS);

const annonncement =
  'All passengers come to barding door 23. Boarding door 23!';
console.log(annonncement.replaceAll('door', 'gate'));
//with regular expression
console.log(annonncement.replace(/door/g, 'gate'));

//booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airbus'));
console.log(plane.endsWith('neo'));

//split
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);

//join
const newNamwe = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newNamwe); //Mr. Jonas SCHMEDTMANN

//padding
const msg = 'Go to gat 23!';
console.log(msg.padStart(25, '+'));
console.log(msg.padStart(25, '+').length);

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(5463758798));
console.log(maskCreditCard(54637587984356));

//repeat
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(3);
planesInLine(5);
planesInLine(10);
