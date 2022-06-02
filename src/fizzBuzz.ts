enum FizzBuzzTypes {
    FIZZ = 'Fizz',
    BUZZ = 'Buzz',
    FIZZBUZZ = 'Fizz Buzz'
}

export class FizzBuzz {
    constructor() {
    }

    public generate(size: number): string[] {
        const resultArr: string[] = [];
        let result: string;
        this.generateNumberArray(size).forEach(item => {
            if (this.isDivideByThree(item) && this.isDivideByFive(item)) {
                result = FizzBuzzTypes.FIZZBUZZ;
            } else  if (this.isDivideByThree(item)) {
                result = FizzBuzzTypes.FIZZ;
            } else if (this.isDivideByFive(item)) {
                result = FizzBuzzTypes.BUZZ;
            } else {
                result = item.toString();
            }
            resultArr.push(result);
        })
        return resultArr;
    }

    private generateNumberArray(size: number): number[] {
        return Array.from({length: size}, (_, i) => i + 1);
    }

    private isDivideByThree(item: number): boolean {
        return item % 3 === 0;
    }

    private isDivideByFive(item: number): boolean {
        return item % 5 === 0;
    }
}