function toCase(text) {
  // write your code here
	let upp = text.toUpperCase();
	let down = text.toLowerCase();
	
	return down + '-' + upp;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
   