function reverseArrayInPlace(myArr) {
	for (let i = 0; i < myArr.length; i++) {
		// add an empty cell at position i, push the rest of the array to the right
		myArr.splice(i, 0, " ");
		// move the last element in array to position i, overwriting the empty cell
		myArr.splice(i, 1, myArr[myArr.length-1]);
		// remove the last element in array, since it was copied to a new position
		myArr.pop();
	}
	return myArr;
}