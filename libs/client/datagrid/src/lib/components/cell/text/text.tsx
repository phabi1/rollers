import { useMemo } from 'react';
import { DatagridCellProps } from '../../../models/datagrid-cell-props.model';

export function DatagridCellText({ item, column }: DatagridCellProps) {
  const value = useMemo(() => {
    const field = column.data || column.name;
    const val = item[field] !== undefined ? item[field] : '-';
    if (typeof val === 'object' && val !== null) {
      // Handle special cases for objects, e.g., dates
      if (val instanceof Date) {
        return val.toLocaleDateString();
      } else if (Array.isArray(val)) {
        return val.join(', ');
      } else {
        return JSON.stringify(val);
      }
    }
    return val !== null && val !== undefined ? String(val) : '-';
  }, [item, column]);

  return <>{column.feature ? <strong>{value}</strong> : value}</>;
}

export default DatagridCellText;
