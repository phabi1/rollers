import { useMemo } from 'react';
import { DatagridCellProps } from '../../../models/datagrid-cell-props.model';

export function DatagridCellBoolean({
  item,
  column,
}: DatagridCellProps) {
  const value = useMemo(() => {
    return item[column.data || column.name] ? 'Yes' : 'No';
  }, [item, column]);

  return <>{value}</>;
}

export default DatagridCellBoolean;
