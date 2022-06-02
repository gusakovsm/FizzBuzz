import { FizzBuzz } from './fizzBuzz';

describe('FizzBuzz', () => {
    const fizzBuzzFactory: FizzBuzz = new FizzBuzz();
    describe('#generate', () => {
        it('should return empty array if input is 0', () => {
            expect(fizzBuzzFactory.generate(0)).toEqual([])
        });

        it('should return [1, 2, Fizz] array if input is 3', () => {
            expect(fizzBuzzFactory.generate(3)).toEqual(['1', '2', 'Fizz']);
        });

        it('should return [1, 2, Fizz, 4, Buzz] array if input is 5', () => {
            expect(fizzBuzzFactory.generate(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz'])
        });

        it('should return [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz] array if input is 15', () => {
            expect(fizzBuzzFactory.generate(15))
                .toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'Fizz Buzz'])
        });
    })
});