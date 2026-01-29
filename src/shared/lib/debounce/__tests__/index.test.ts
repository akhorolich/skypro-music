import { debounce } from '../index';

describe('debounce utility', () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should call function after delay', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(1000, mockFn);

    debouncedFn('test');
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledWith('test');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should cancel previous call if called again within delay', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(1000, mockFn);

    debouncedFn('first');
    jest.advanceTimersByTime(500);
    debouncedFn('second');
    jest.advanceTimersByTime(500);

    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(mockFn).toHaveBeenCalledWith('second');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple arguments', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(500, mockFn);

    debouncedFn('arg1', 'arg2', 'arg3');
    jest.advanceTimersByTime(500);

    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2', 'arg3');
  });

  it('should work with 0 delay', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(0, mockFn);

    debouncedFn('test');
    jest.advanceTimersByTime(0);

    expect(mockFn).toHaveBeenCalledWith('test');
  });
});
