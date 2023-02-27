import {isEven} from "./example";

describe('example.ts', () => {
    describe('isEven', () => {
        it('should be even', function () {
            expect(isEven(2)).toBeTruthy();
            expect(isEven(4)).toBeTruthy();
        });
    });
});