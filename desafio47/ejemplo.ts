//import {parse, dayOfYear, difference} from 'https://deno.land/std@0.119.0/datetime/mod.ts';

const encoder = new TextEncoder();
const data = encoder.encode('hello');
await Deno.writeFile('test.txt', data)
//console.log(parse('20-01-2019', 'dd-MM-yyyy'));