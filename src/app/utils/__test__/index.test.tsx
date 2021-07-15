import { omit } from '..';
const mockFilms = require('../../services/mockFilms.json');


describe('Utils', () => {
    test('Omit', () => {
        const results = mockFilms.results.slice(0, 1);
        const beforeLength = Object.keys(results[0]).length;
        const afterLength = Object.keys(omit(results[0], "characters", "planets", "starships")).length;

        expect(afterLength).toBeLessThan(beforeLength);
    });

});
