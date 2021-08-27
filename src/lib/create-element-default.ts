function createElementDefault(
  component: string,
  props?: Record<string, string | number>,
  children?: string | HTMLElement | (string | HTMLElement)[],
): HTMLElement {
  const element = document.createElement(component);

  Object.keys(props || []).forEach((propName) => {
    element.setAttribute(propName, String(props?.[propName]));
  });

  (Array.isArray(children) ? children : [children]).forEach((child) => {
    if (child) {
      element.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
    }
  });

  return element;
}

export default createElementDefault;
