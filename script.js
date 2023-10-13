// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var stringOne = 'I am a ';
var stringTwo = 'Kalvian';

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
console.log(stringOne.concat(stringTwo));
// Challenge 3: Store a string in a variable and display the length of the string.
console.log(stringOne.length);
// Challenge 4: Store a string in a variable and convert it into uppercase.
console.log(stringOne.toUpperCase());
//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var stringThree = 'I love programming';
console.log(stringThree.replace(/programming/g, 'JavaScript programming'));
// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var stringFour = 'Free clouds ';
console.log(stringFour.repeat(3));
//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var stringFive = 'I am a Kalvian';
console.log(stringFive.split(' '));
// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var stringSix = 'Time and Tide wait for none';
console.log(stringSix.indexOf('Ti'));
// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var stringSeven = 'When life gives you lemons make lemonade';
console.log(stringSeven.includes('lemon'));

// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var stringEight = 'You must be the change you wish to see in the world.';
console.log(stringEight.slice(16, 23));
console.log(stringEight.substring(46, 51));
