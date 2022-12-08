let animals = [];

describe('animals array', () => {
    beforeEach(() => {
        console.log('BEFORE EACH');
        animals = ['lion', 'tiger', 'bear'];
    });

    it('should have crocodile as the last element', () => {
        animals.push('crocodile');
        expect(animals[animals.length - 1]).toBe('crocodile');
    });

    it('should have monkey as the first element', () => {
        animals.unshift('monkey');
        expect(animals[0]).toBe('monkey');
    });

    it('should have a length of 3', () => {
        expect(animals.length).toBe(3);
    });
});

describe('test something else', () => {
    afterAll(() => {
        console.log('AFTER ALL');
    });

    it('should be truthy', () => {
        expect(true).toBeTruthy();
    });
});