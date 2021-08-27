import { JsonComponent, CreateElementFn } from '../interfaces';

function render<FnResult = never extends infer R ? R : never>(
  rootJsonComponent: JsonComponent,
  createElement: CreateElementFn<FnResult>,
): FnResult {
  const { component, props } = { ...rootJsonComponent };
  const children = Array.isArray(rootJsonComponent.children)
    ? rootJsonComponent.children.map((child, key) =>
        typeof child === 'string'
          ? child
          : render({ ...child, props: { ...child.props, key } }, createElement),
      )
    : (rootJsonComponent.children as string | string[] | FnResult);

  return createElement(component, props, children);
}

export default render;
