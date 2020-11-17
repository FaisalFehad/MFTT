const { expect } = require('chai');
const { top_3_words } = require('./index');

describe('top_3_words', () => {
  it('returns an Array', () => {
    expect(top_3_words('')).to.be.an('Array');
  });
  it('returns an empty array with a nested empty string', () => {
    expect(top_3_words('')).to.be.length(1);
    expect(top_3_words('')).to.eql(['']);
  });
  it('returns an array with a string of the passed word', () => {
    expect(top_3_words('hi')).to.be.length(1);
    expect(top_3_words('hi')).to.eql(['hi']);
  });
  it('returns lowercase string nested in an array,regardless of the input case', () => {
    expect(top_3_words('HI')).to.eql(['hi']);
    expect(top_3_words('hi')).to.eql(['hi']);
    expect(top_3_words('hElLo')).to.eql(['hello']);
  });
  it('returns lowercase string nested in an array,regardless of the input case', () => {
    expect(top_3_words('HI')).to.eql(['hi']);
    expect(top_3_words('hi')).to.eql(['hi']);
    expect(top_3_words('hElLo')).to.eql(['hello']);
  });
  it('returns returns array of repeated words', () => {
    const input1 = 'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e';
    const input2 = 'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.';
    expect(top_3_words(input1)).to.eql(['e', 'ddd', 'aa']);
    expect(top_3_words(input2)).to.eql(['a', 'of', 'on']);
  });
  it('returns returns array of repeated words when passed long input', () => {
    const input = 'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.';
    expect(top_3_words(input)).to.eql(['a', 'of', 'on']);
  });
  it('returns returns array of repeated words: ignoring special chars', () => {
    const input = " //wont won't won't";
    expect(top_3_words(input)).to.eql(["won't", 'wont']);
  });

//   const input = " //wont won't won't";
//   top_3_words(input);
});
