import { useMemo } from 'react';
import { DatagridCellProps } from '../../../models/datagrid-cell-props.model';

export function DatagridCellDate({ item, column }: DatagridCellProps) {
  const value = useMemo(() => {
    return item[column.data || column.name]
      ? new Date(item[column.data || column.name]).toLocaleDateString()
      : '-';
  }, [item, column]);
  return <>{value}</>;
}

export default DatagridCellDate;
