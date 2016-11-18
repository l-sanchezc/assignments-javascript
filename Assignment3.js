function unhash(h) {
    var word ="";
    var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
    while (h !== 7) { //we are going to excute this loop until we find the entire word (when we have h=7)
        var index = h % 37; //We are doing the opposite operation of the given function 
      					//The remainder of h/37 is the index of the letter since we multiply h by 37 before adding the index.
        h = (h - index) / 37; //We get the new h (h-index/37) to calculate the next letter
        word=letters[index]+word; //We start at the end, so we are getting the last letters until we get the first obne.
    }
    return word; //Return the full word
}

function assignment3(str) {
    var h = 7;
    var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
	for (var i = 0; i < str.length; i++) {
		var letter = str[i];
		var index = letters.indexOf(letter);
		h = (h * 37) + index;
	}
	return h;
}