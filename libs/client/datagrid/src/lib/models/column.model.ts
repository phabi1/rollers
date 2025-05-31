export interface DatagridColumn {
  name: string;
  header: string;
  type?: string;
  data?: string;
  [key: string]: any;
}
