function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let lostr=s1.toLowerCase();
	let losub=s2.toLowerCase();
	return lostr.indexOf(losub);
}

// // Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
