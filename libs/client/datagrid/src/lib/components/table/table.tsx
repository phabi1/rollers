import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useMemo } from 'react';
import DatagridCellOutlet from '../cell-outlet/cell-outlet';
import DatagridCellActions from '../cell/actions/actions';

export interface DatagridTableProps {
  columns: { name: string; header: string }[];
  actions?: { name: string; label: string; handle: (item: any) => void }[];
  source: any[];
}

export function DatagridTable({
  columns,
  actions,
  source,
}: DatagridTableProps) {
  console.log('DatagridTable rendered with source:', source);
  const THead = useMemo(
    () => (
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.name} className="">
              {column.header}
            </TableCell>
          ))}
          <TableCell>&nbsp;</TableCell>
        </TableRow>
      </TableHead>
    ),
    [columns]
  );

  return (
    <TableContainer>
      <Table className="w-full">
        {THead}
        <TableBody>
          {source.map((item, index) => (
            <TableRow key={index} className="border-b hover:bg-gray-100">
              {columns.map((column) => (
                <TableCell key={column.name}>
                  <DatagridCellOutlet item={item} column={column} />
                </TableCell>
              ))}
              <TableCell>
                <DatagridCellActions actions={actions || []} item={item} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DatagridTable;
