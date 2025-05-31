'use client';
import { lazy, LazyExoticComponent, Suspense } from 'react';
import { DatagridColumn } from '../../models/column.model';

export interface DatagridCellOutletProps {
  item: any;
  column: DatagridColumn;
}

const CELL_TYPES: Record<string, LazyExoticComponent<any>> = {
  text: lazy(() => import(`../cell/text/text`)),
  boolean: lazy(() => import(`../cell/boolean/boolean`)),
  date: lazy(() => import(`../cell/date/date`)),
};

export function DatagridCellOutlet({ item, column }: DatagridCellOutletProps) {
  const CellComponent = CELL_TYPES[column.type || 'text'];

  if (!CellComponent) {
    console.warn(`No cell component found for type: ${column.type}`);
    return <div>Unsupported cell type: {column.type}</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CellComponent item={item} column={column} />
    </Suspense>
  );
}

export default DatagridCellOutlet;
