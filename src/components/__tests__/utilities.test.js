import { sumItems } from '../utilities';

/*
You can use 'describe()' to group tests together
They will show up as a group in the console:
  sumItems sums items in an array when
    √ length is 3
    √ length is 2
    √ length is 1
    √ length is 0
*/

describe('sumItems sums items in an array when', () => {
  test('length is 3', () => {
    const result = sumItems([1, 2, 3]);
    expect(result).toBe(6);
  });

  test('length is 2', () => {
    const result = sumItems([1, 2]);
    expect(result).toBe(3);
  });

  test('length is 1', () => {
    const result = sumItems([2]);
    expect(result).toBe(2);
  });

  test('length is 0', () => {
    const result = sumItems([]);
    expect(result).toBe(0);
  });
});