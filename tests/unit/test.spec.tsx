import React from 'react';
import { render } from '@testing-library/react';

const TestComponent: React.FC = () => {
  return <div className="test-component">Hello world</div>
}

describe('Test whether test is available on react', () => {
  it('Test TestComponent', async () => {
    const wrapper = render(<TestComponent />);
    const { container } = wrapper;
    const testDom = container.querySelector('.test-component');
    expect(testDom).toBeTruthy();
    expect(testDom?.innerHTML).toBe('Hello world');
  });
})