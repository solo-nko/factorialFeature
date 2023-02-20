const Calculate = {
	//the factorial method returns the result of n!.  For example, 5! should be the result of 5 x 4 x 3 x 2 x 1, or 120.
	factorial(inputNum)
	{
		let factorialArray = [];
		//push each number in the factorial calculation to an array, in descending order.
		for(inputNum; inputNum > 0; inputNum--)
		{
			factorialArray.push(inputNum);
		}
		//use the reduce JS array function to calculate the factorial
		return factorialArray.reduce(function(total, currentNum) {
			return total*currentNum;
		});
	}

}

module.exports = Calculate;