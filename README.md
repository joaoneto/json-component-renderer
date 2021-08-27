JsonComponent Renderer
----------------------

JsonComponent Renderer is a function helper that traverse the json data, calling the customized transformations function callback. It is useful to render a DOM tree based on the json data structure.

The json data structure interface is:
```typescript
interface JsonComponent {
  component: string;
  props?: JsonComponentProps;
  children?: string | (string | JsonComponent)[];
}
```

## Installation:
npm i json-component-render
or
yarn add json-component-render
