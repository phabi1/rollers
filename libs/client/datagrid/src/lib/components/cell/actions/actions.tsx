'use client';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { DatagridAction } from '../../../models/action.model';

export interface DatagridCellActionsProps {
  actions: DatagridAction[];
  item: any; // Replace 'any' with the appropriate type for your item
}

export function DatagridCellActions({
  actions,
  item,
}: DatagridCellActionsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onActionClick = (action: DatagridAction, item: any) => {
    if (action.handle) {
      action.handle(item);
    } else {
      console.warn(`Action ${action.name} does not have a handle function.`);
    }
  };

  return (
    <>
      <Button
        aria-controls={open ? 'datagrid-actions-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined"
        size="small"
      >
        {' '}
        Actions
      </Button>
      <Menu
        id="datagrid-actions-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'datagrid-actions-button',
        }}
      >
        {actions.map((action) => (
          <MenuItem
            key={action.name}
            onClick={() => onActionClick(action, item)}
          >
            {action.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default DatagridCellActions;
