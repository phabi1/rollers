'use client';

import { DatagridColumn } from './models/column.model';
import { DatagridAction } from './models/action.model';
import DatagridTable from './components/table/table';

export interface LibsClientDatagridProps<T> {
  columns: DatagridColumn[];
  actions?: DatagridAction<T>[];
  source?: T[];
  itemClick?: (item: T) => void;
}

export function Datagrid<T>({
  columns,
  actions,
  source = [],
  itemClick,
}: LibsClientDatagridProps<T>) {
  return (
    <>
      <DatagridTable
        source={source}
        columns={columns}
        actions={actions}
        itemClick={itemClick}
      ></DatagridTable>
    </>
  );
}

export default Datagrid;
