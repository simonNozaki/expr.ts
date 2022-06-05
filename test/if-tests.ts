import {If} from '../src';

describe('If tests', () => {
  const base = 'The quick brown fox jumps over the lazy dog';

  it('evaluate if expression', () => {
    const r = If(base.length > 30, () => 'over 30')
        .else(() => 'under 30');
    expect(r).toBe('over 30');
  });

  it('evaluate else expression', () => {
    const r = If(base.length > 50, () => 'over 50')
        .else(() => 'under 50');
    expect(r).toBe('under 50');
  });
});
