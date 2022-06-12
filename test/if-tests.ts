/* eslint-disable new-cap */
import {If} from '../src';

describe('If tests', () => {
  const base = 'The quick brown fox jumps over the lazy dog';

  /**
   * Sample service for unit testing
   */
  class StatusFindService {
    /**
     * @return {string}
     */
    execute(): string {
      return '5';
    }
  }

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

  it('evaluate elseIf and else sequentially', () => {
    const result = new StatusFindService().execute();
    const res = If(result === '0', () => ({message: 'success'}))
        .elseIf(result === '5', () => ({message: 'not found'}))
        .else(() => ({message: 'failure'}));
    console.log(res);
    expect(res).toStrictEqual({message: 'not found'});
  });
});
