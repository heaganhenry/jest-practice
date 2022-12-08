const sum = require('./sum');

describe('example tests', () => {
    it('should add 1 + 2 to equal 3', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    it('should be equal objects', () => {
        const obj = {};
        expect(obj).toEqual({});
    });
});

describe('truthy or falsy', () => {
    const n = null;

    it('is falsy', () => {
        // expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
    });

    it('is null', () => {
        expect(n).toBeNull();
    });
});

describe('number values', () => {
    const number = 2 + 3;
    const float = 0.1 + 0.2;

    it('is correctly compared', () => {
        expect(number).toBeGreaterThanOrEqual(5);
    });

    it('rounds up to 0.3', () => {
        expect(float).toBeCloseTo(0.299);
    });
});

describe('array tests', () => {
    const shoppingList = [
        'chicken', 'vegetables', 'fish'
    ];

    it('should contain vegetables', () => {
        expect(shoppingList).toContain('vegetables');
    });
});

describe('exception tests', () => {
    function compileCode() {
        throw new Error('syntax error');
    }

    it('should throw an error', () => {
        // expect(compileCode).toThrow();
        // expect(compileCode).toThrow(Error);
        expect(compileCode).toThrow('syntax error');
    });
});