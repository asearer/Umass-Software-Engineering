const { checkForErrors, timeToWords } = require('./Timeword');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeToWords).toBe('function');
  });
  test('it returns a correct word form time when given valid input.', () => {
    expect(timeToWords("23:23")).toEqual("eleven twenty three PM");
    expect(timeToWords("00:00")).toEqual("midnight");
    expect(timeToWords("12:00")).toEqual("noon");
    expect(timeToWords("06:00")).toEqual("six o'clock AM");
    expect(timeToWords("18:01")).toEqual("six oh one PM");
    expect(timeToWords("05:13")).toEqual("five thirteen AM");
    expect(timeToWords("12:09")).toEqual("twelve oh nine PM");
    expect(timeToWords("00:19")).toEqual("twelve nineteen AM");
  });
  test('it throws an error given invalid input', async() => {
    await expect(() => {
      timeToWords("-01:45");
    }).toThrow();
    await expect(() => {
      timeToWords("49:45");
    }).toThrow(new Error("Time string does not represent a real time."));
    await expect(() => {
      timeToWords("12:85");
    }).toThrow(new Error("Time string does not represent a real time."));
    await expect(() => {
      timeToWords(1856);
    }).toThrow(new Error("The input time must be a string."));
    await expect(() => {
      timeToWords(true);
    }).toThrow(new Error("The input time must be a string."));
    await expect(() => {
      timeToWords(false);
    }).toThrow(new Error("The input time must be a string."));
  });
});