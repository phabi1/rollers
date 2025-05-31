export interface DatagridAction<T = any> {
  name: string;
  label: string;
  handle: (item: T) => void;
}
