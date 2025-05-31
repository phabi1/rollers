'use client';

import { DatagridColumn } from './models/column.model';
import { DatagridAction } from './models/action.model';
import DatagridTable from './components/table/table';

export interface LibsClientDatagridProps<T> {
  columns: DatagridColumn[];
  actions?: DatagridAction<T>[];
  source?: T[];
}

export function Datagrid<T>({
  columns,
  actions,
  source = [],
}: LibsClientDatagridProps<T>) {
  return (
    <>
    <DatagridTable
      source={source}
      columns={columns}
      actions={actions}
    ></DatagridTable>
    </>
  );
}

export default Datagrid;
