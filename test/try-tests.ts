import {doOnTry, recover} from '../src';

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
    /**
     * Always throw uri error
     */
    executeUri(): string {
      throw new URIError('');
    }
  }

  it('can catch Error', () => {
    const s = doOnTry(() => (new ErrorService().execute()),
        recover(Error.prototype, (e: Error) => ('DEFAULT')));

    expect(s).toBe('DEFAULT');
  });

  it('can catch URI Error', () => {
    const s = doOnTry(() => (new ErrorService().executeUri()),
        recover(URIError.prototype, (e: URIError) => ('URI Error')),
        recover(Error.prototype, (e: Error) => ('DEFAULT')));

    expect(s).toBe('URI Error');
  });
});

