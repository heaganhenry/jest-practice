const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
};

describe('mock callback tests', () => {
    const items = [2, 3];
    const mockCallback = jest.fn(x => x + 42);

    it('should be called back twice', () => {
        forEach(items, mockCallback);
        expect(mockCallback.mock.calls.length).toBe(2);
    });

    it('should first be called back on 2', () => {
        forEach(items, mockCallback);
        expect(mockCallback.mock.calls[0][0]).toBe(2);
    });

    it('should have 44 as the first callback result', () => {
        forEach(items, mockCallback);
        expect(mockCallback.mock.results[0].value).toBe(44);
    });
});

describe('mock return tests', () => {
    const mockFunction = jest.fn();
    mockFunction
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(99);

    it('should return true then 99', () => {
        const returnOne = mockFunction();
        const returnTwo = mockFunction();

        expect(returnOne).toBe(true);
        expect(returnTwo).toBe(99);
    });
});

const axios = require('axios');
const fetchData = async (id) => {
    const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return results.data;
};

describe('mock async call', () => {
    it('should mock axios', async () => {
        jest.spyOn(axios, 'get').mockReturnValueOnce({
            data: {
                id: 1,
                todo: 'practice jest'
            }
        });

        const results = await fetchData(1);
        expect(results.todo).toBe('practice jest');
    });
});