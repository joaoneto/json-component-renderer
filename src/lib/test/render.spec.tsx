import { createElement as createElementReact } from 'react';
import { render as rtlRender } from '@testing-library/react';
import render from '../render';
import createElement from '../create-element-default';

describe('lib render', () => {
  test('should render simple div', () => {
    const fixture = {
      component: 'div',
      children: ['Hello', ' ', 'World'],
    };

    const given = render(fixture, createElement).outerHTML;
    const expected = `<div>${fixture.children.join('')}</div>`;

    expect(given).toBe(expected);
  });

  test('should render div with tag attributes', () => {
    const fixture = {
      component: 'div',
      props: { id: 'foo' },
    };

    const given = render(fixture, createElement).outerHTML;
    const expected = '<div id="foo"></div>';

    expect(given).toBe(expected);
  });

  test('should render div with empty children', () => {
    const fixture = {
      component: 'div',
    };

    const given = render(fixture, createElement).outerHTML;
    const expected = '<div></div>';

    expect(given).toBe(expected);
  });

  test('should render with React createElement', () => {
    const fixture = {
      component: 'div',
      props: { id: 'my-div' },
    };

    const { container } = rtlRender(<>{render(fixture, createElementReact)}</>);
    const given = container.children[0].outerHTML;
    const expected = '<div id="my-div"></div>';

    expect(given).toBe(expected);
  });

  test('should render children with React createElement', () => {
    const fixture = {
      component: 'div',
      children: ['One', { component: 'span', props: { id: 1 }, children: 'Two' }, ' ', 'Three'],
    };

    const { container } = rtlRender(<>{render(fixture, createElementReact)}</>);
    const given = container.children[0].outerHTML;
    const expected = '<div>One<span id="1">Two</span> Three</div>';

    expect(given).toBe(expected);
  });
});
