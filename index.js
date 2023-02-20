const Calculate = {
	//the factorial method returns the result of n!.  For example, 5! should be the result of 5 x 4 x 3 x 2 x 1, or 120.
	factorial(inputNum)
	{
		//test for type, throw error if type is invalid
		if (typeof inputNum !== 'number')
		{
			throw TypeError('Input must be a number.');
		}
		
		if(inputNum === 0)
		{
			return 1;
		}

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