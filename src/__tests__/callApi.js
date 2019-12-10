
import fetch from '../__mocks__/fetch';
import callApi from '../callApi';

global.fetch = fetch;

describe('CallApi', () => {
    it('it should call fetch once and return an object', async () => {
        const fetchSpy = jest.spyOn(window, 'fetch');
        const result = await callApi();
        expect(fetchSpy).toBeCalled();
        expect(typeof(result)).toBe('object');
    })
});
