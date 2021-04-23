import {print} from "./main";

describe('Odd Elements', () => {

    test('5 length array', () => {
        expect(print([1, 2, 3, 4, 5], 5)).toEqual([1, 3, 5]);
    });

});