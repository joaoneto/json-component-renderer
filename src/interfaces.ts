export interface JsonComponentProps {
  [propName: string]: string | number;
}

export interface JsonComponent {
  component: string;
  props?: JsonComponentProps;
  children?: string | (string | JsonComponent)[];
}

export type CreateElementFn<FnResult = never extends infer R ? R : never> = (
  component: string,
  props?: JsonComponentProps,
  children?: string | FnResult | (string | FnResult)[],
) => FnResult;
