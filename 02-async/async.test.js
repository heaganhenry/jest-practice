const fetchData = require('./async');

describe('fetching todos', () => {
    it('should be correct todo', () => {
        fetchData(1).then(todo => {
            expect(todo.id).toEqual(1);
        });
    });

    it('should be correct todo', async () => {
        const todo = await fetchData(1);
        expect(todo.id).toEqual(1);
    });
});