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

		//verify
		const actualResult = Calculate.factorial(3);

		//verify
		assert.strictEqual(expectedResult,actualResult);
		});
 
	});
});