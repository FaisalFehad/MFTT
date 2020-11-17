const { expect } = require('chai');
const { top_3_words } = require('./index');

describe('top_3_words', () => {
  it('returns an empty Array when passed empty string', () => {
    expect(top_3_words('')).to.be.an('Array');
  });
  it('returns an empty array with a nested empty string', () => {
    expect(top_3_words('')).to.be.length(1);
    expect(top_3_words('')).to.eql(['']);
  });
  it('returns an array with a nested string when passed single worded string', () => {
    expect(top_3_words('hi')).to.be.length(1);
    expect(top_3_words('hi')).to.eql(['hi']);
  });
  it('returns lowercase string nested in an array,regardless of the input case', () => {
    expect(top_3_words('HI')).to.eql(['hi']);
    expect(top_3_words('hi')).to.eql(['hi']);
    expect(top_3_words('hElLo')).to.eql(['hello']);
  });
  it('dose not change the original data: returns a new string', () => {
    const input = 'abc';
    expect(top_3_words(input)).to.not.equal(input);
    expect(input).to.eql('abc');
  });
  it('returns returns array of repeated words', () => {
    const input1 = 'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e';
    const input2 = 'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.';
    expect(top_3_words(input1)).to.eql(['e', 'ddd', 'aa']);
    expect(top_3_words(input2)).to.eql(['a', 'of', 'on']);
  });
  it('returns returns array of repeated words when passed a long lowercase string input', () => {
    const input = 'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.';
    expect(top_3_words(input)).to.eql(['a', 'of', 'on']);
  });
  it('returns returns array of repeated words: ignoring special chars', () => {
    const input = " //wont won't won't";
    expect(top_3_words(input)).to.eql(["won't", 'wont']);
  });
  it('returns returns array of repeated words: very long uppercase input with special characters', () => {
    const input = 'OKAY OKAY SO HA YEAH IM A COMEDIAN YOU LISTEN TO ME K? GOOD. SO THERE IS THIS MAGICAL ROOM WHERE ONLY I CAN GO IN AND NO, NOT PERRY THE PLATYPUS. OKAY I WENT IN THIS ROOM AND I FOUND OUT I WAS WONDER WOMAN BUT IM ACTUALLY A MAN SO YEAH IM JUST SITTING THERE THEN OUT OF THE BLUE A WALRUS COMES UP TO ME AND SAYS HEY YOU EAT TACOS? I SAY YEAH I LOVE TACOS, HE SAYS OH YOUR THE PERSON IVE BEEN LOOKING FOR BUT I HAVE TO LEAVE SO YEAH YOUR MOMS CHEST HAIR OKAY THEN THIS BUTT CHUCKER CAME UP TO ME AND STARTED TO CHUCK MY BUTT AND I SAID HEY STOP CHUCKING MY BUTT SO SHE SAID OH SORRY WRONG BUTT AND SHE LEFT SO YEAH BASICALLY WHAT IM TRYING TO SAY IS THAT IS MY ROOM AND ONLY MY ROOM AND I AM A COMPLETE WEIRDO JUST LIKE YOUR LIVING ROOM FLOOR AND OKAY SO I WAS DRINKING SOME VITAMIN WATER THEN THIS DUDE COMES UP TO ME AND SMACKS THE VITAMIN WATER OUT OF MY HAND AND I WAS LIKE DUDE ARE YOU SERIOUS THAT COSTED MORE THAN A MICROWAVE ON SIMS WHICH IS 800 BUCKS LIKE WHAT I NEED A DUCK YOU GOT HOWARD THE DUCK PLAYING AND IM LIKE MANNN HOW IS THIS PG? IF THIS WAS PG IT WOULD BE APPROPRIATE FOR AGES 11 AND DOWN LIKE MAN WOW I CANT BELIEVE MY TOES! OWIE DUCT TAPE REALLY HURTS LIKE UR UNCLE OWCH OOH WOULD YOU LIKE SOME ICE WITH THAT BURNNNNN YEAH SO OKAY BYE NOW I NEVER LIKED YOU ANYWAYS...';
    expect(top_3_words(input)).to.eql(['so', 'to', 'like']);
  });
});
