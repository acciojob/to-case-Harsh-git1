function toCase(text) {
  // write your code here
	let upp = text.toUpperCase();
	return text + '-' + upp;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
   