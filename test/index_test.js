const assert = require("assert");
const Calculate = require('../index');

describe('Calculate', () => {
	describe('.factorial', () => {
		it('tests if the output of 5! is 120', () => {
			//setup
			const expectedResult = 120;

			//exercise
			const actualResult = Calculate.factorial(5);

			//verify
			assert.strictEqual(expectedResult, actualResult);
		})

		it('tests if the output of 3! is 6', () => {
		//setup
		const expectedResult = 6;

		//exercise
		const actualResult = Calculate.factorial(3);

		//verify
		assert.strictEqual(expectedResult,actualResult);
		});

		it('returns 1 if 0 is inputed', () =>
		{
			//setup
			const expectedResult = 1;

			//exercise
			const actualResult = Calculate.factorial(0);

			//verify
			assert.strictEqual(expectedResult,actualResult);
		})

		it('throws an error if input type is not a number', () =>
		{
			//setup
			const testInput = "hello"

			//exercise & verify
			assert.throws(() => {
				Calculate.factorial(testInput), TypeError
			});

		})
 
	});
});