
	let list = {
		value: 1,
		rest: {
			value: 2,
			rest: {
	  			value: 3,
	  			rest: null
			}
		}
	};

	let anotherL = {
		value: 0,
		rest: list
	};

	function arrayToList(myArr) {
				
		let element = myArr.shift();

		let node = {
			value: element,
			rest: null
		};

		if (myArr.length > 0) {
			node = {
				value: element,
				rest: arrayToList(myArr)
			};
			
		}
		return node;
	}

	function listToArray(list) {
		let myArray = [];

		return Object.entries(list)[0];
	}

	console.log(arrayToList([10, 20, 30]));
	console.log(listToArray(arrayToList([10, 20, 30])));

	console.log(list);
	console.log(anotherL);

