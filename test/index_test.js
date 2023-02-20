const assert = require("assert");
const Calculate = require('../index');

describe('Calculate', () => {
	describe('.factorial', () => {
		it('tets if the output of 5! is 120', () => {
			//setup
			const expectedResult = 120;

			//exercise
			const actualResult = Calculate.factorial(5);

			//verify
			assert.strictEqual(expectedResult, actualResult);
		})
 
	});
});