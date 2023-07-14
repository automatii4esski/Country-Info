export type GetAttributes<TElement extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[TElement];
