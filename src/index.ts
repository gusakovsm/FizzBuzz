import {FizzBuzz} from "./fizzBuzz";

const fizzBuzz = new FizzBuzz();
console.log(`FizzBuzz generation:
    0 -> ${fizzBuzz.generate(0)}
    3 -> ${fizzBuzz.generate(3)}
    5 -> ${fizzBuzz.generate(4)}
    15 -> ${fizzBuzz.generate(15)}
`);

