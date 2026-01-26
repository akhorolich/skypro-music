import { render } from '@testing-library/react';
import { Like } from '../index';
import userEvent from '@testing-library/user-event';

describe('Like component', () => {
  it('should render svg element', () => {
    const { container } = render(<Like isLiked={false} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should add liked class when isLiked is true', () => {
    const { container } = render(<Like isLiked={true} />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('class')).toContain('liked');
  });

  it('should not add liked class when isLiked is false', () => {
    const { container } = render(<Like isLiked={false} />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('class')).not.toContain('liked');
  });

  it('should accept custom className', () => {
    const { container } = render(
      <Like isLiked={false} className="custom-class" />,
    );
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('class')).toContain('custom-class');
  });

  it('should call onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    const { container } = render(
      <Like isLiked={false} onClick={handleClick} />,
    );
    const svg = container.querySelector('svg');

    if (svg) {
      await user.click(svg);
    }

    expect(handleClick).toHaveBeenCalled();
  });

  it('should have default isLiked value of false', () => {
    const { container } = render(<Like />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('class')).not.toContain('liked');
  });
});
