// DESCRIBE -> bloco de testes - tests suites
// IT or TEST -> declara um único teste unitário - tests cases
// EXPECT -> asserções dos resultados - validar resultados

function sum(a, b) {
	return a + b;
}

describe("Initial tests", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("First unit test", () => {
		expect(sum(1, 2)).toBe(3);
	})
})