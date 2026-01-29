import { cn } from '../index';

describe('cn - className utility', () => {
  it('should join multiple string classes', () => {
    expect(cn('btn', 'btn-primary')).toBe('btn btn-primary');
  });

  it('should handle object with boolean values', () => {
    expect(cn({ btn: true, 'btn-primary': false })).toBe('btn');
  });

  it('should handle mixed string and object arguments', () => {
    const result = cn('base', { active: true, disabled: false });
    expect(result).toContain('base');
    expect(result).toContain('active');
    expect(result).not.toContain('disabled');
  });

  it('should ignore undefined values', () => {
    expect(cn('btn', undefined, 'primary')).toBe('btn primary');
  });

  it('should handle empty object', () => {
    expect(cn({})).toBe('');
  });

  it('should handle multiple objects', () => {
    const result = cn({ a: true }, { b: true }, { c: false });
    expect(result).toBe('a b');
  });

  it('should return empty string for no arguments', () => {
    expect(cn()).toBe('');
  });
});
