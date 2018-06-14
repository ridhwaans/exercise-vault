/* Given a list of numbers, return whether any two sums to k.
   For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

var SubsetSum = function () {};

SubsetSum.prototype.setList = function(list) {
	try	{
		validate(list);
		this.list = list;
	} catch (err) {
		console.error(err);
	}
}

SubsetSum.prototype.exists = function(k) {
	try {
		validateK(k);
		return sumExists(this.list, this.list.length, k);
	} catch (err) {
		console.error(err);
		return false;
	}
}

function sumExists(list, length, k) {
	// Base cases
	if (k == 0) {
		return true;
	}
	if (length == 0 && k != 0)
		return false;

	// If last element is greater than sum, then ignore/skip
	if (list[length-1] > k)
		return sumExists(list, length - 1, k);

	/* else, check if sum can be obtained by
	(a) including the last element in sum
	(b) excluding the last element from sum */
	return sumExists(list, length - 1, k) || sumExists(list, length - 1, k - list[length-1]);
}

validateK = function(k) {
	if (k == undefined || k == null) {
		throw "k is not valid";
	}
	if (Number.isInteger(k) == false) {
		throw "k is not an integer";
	}
}

validate = (list) => {
 if (Array.isArray(list) == false){
 	throw "Not a valid list";
 }

 function isInteger(element) {
 	return Number.isInteger(element);
 };

 if (list.every(isInteger) == false){
 	throw "List does not contain integers";
 }
}

var subsetSum = new SubsetSum();
subsetSum.setList();
subsetSum.setList(undefined);
subsetSum.setList(null);
subsetSum.setList([1, 2, 3, null, 5]);
subsetSum.setList(['1', 2, 3, 4, 5]);
subsetSum.setList([0.5, 7.5]);
subsetSum.setList('');

subsetSum.setList([]);
console.log("Does subset sum exist? " +  subsetSum.exists());
console.log("Does subset sum exist? " +  subsetSum.exists(undefined));
console.log("Does subset sum exist? " +  subsetSum.exists(null));
console.log("Does subset sum exist? " +  subsetSum.exists('nine'));
console.log("Does subset sum exist? " +  subsetSum.exists(9.5));
console.log("Does subset sum exist? " +  subsetSum.exists(9));

subsetSum.setList([3, 34, 4, 12, 5, 2]);
console.log("Does subset sum exist? " +  subsetSum.exists(0));
console.log("Does subset sum exist? " +  subsetSum.exists(9));

/* See also:
	https://www.geeksforgeeks.org/write-a-c-program-that-given-a-set-a-of-n-numbers-and-another-number-x-determines-whether-or-not-there-exist-two-elements-in-s-whose-sum-is-exactly-x/
	https://www.youtube.com/watch?v=nqlNzOcnCfs&t=186s
*/