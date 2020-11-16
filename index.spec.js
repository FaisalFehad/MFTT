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
});
