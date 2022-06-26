import {attempt, recover, lastly} from '../src';

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
    const s = attempt(() => (new ErrorService().execute()),
        recover(Error, (e: Error) => ('DEFAULT')));

    expect(s).toBe('DEFAULT');
  });

  it('can catch URI Error', () => {
    const s = attempt(() => (new ErrorService().executeUri()),
        recover(URIError, (e: URIError) => ('URI Error')),
        recover(Error, (e: Error) => ('DEFAULT')));

    expect(s).toBe('URI Error');
  });

  it('is executed lastly', () => {
    const s = attempt(() => (new ErrorService().execute()),
        recover(Error, (e: Error) => {
          console.log(e);
          console.log(e instanceof Error);
          return 'Error';
        }),
        lastly(() => {
          console.log('Attempted');
        }));
    expect(s).toBe('Error');
  });
});

