# assignments-javascript

Assignment 1: Given an array of numbers, assume that they are all different. Calculate the largest difference (subtraction) between any two numbers of the array.

Assignment 2: Create a function that takes two rectangles as parameters and returns true if the rectangles intersect, false otherwise. Assume that the (0,0) of the axis is the top left. (This is actually how iOS positions views in the screen).
rect = {
x: 20, y:30, width: 40, height: 11
}

Assignment 3: Given the function assignment3 that calculates a number from a string. Find the string for which the number is: 667734139064 . The string has 7 characters and it can have repeated chars. The strings has to be formed with the characters: "a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w".
function assignment3(str) {
var h = 7;
var letters = ["a","c","d","e","g","i","l","m","n","o","p",
"r","s","t","u","w"];
for (var i = 0; i < str.length; i++) {
var letter = str[i];
var index = letters.indexOf(letter);
h = (h * 37) + index;
}
return h;
}
assignment3("leepdag") produces the number: 680131662011
