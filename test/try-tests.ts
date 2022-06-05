import {Try, Catch} from '../src';

describe('Try tests', () => {
  /**
   * Service class for unit testing.
   */
  class ErrorService {
    /**
     * Always throw error
     */
    execute(): string {
      throw new Error('');
    }
  }

  it('can catch Error', () => {
    const s = Try(() => (new ErrorService().execute()),
        Catch(Error, (e: Error) => ('DEFAULT')));

    expect(s).toBe('DEFAULT');
  });
});

