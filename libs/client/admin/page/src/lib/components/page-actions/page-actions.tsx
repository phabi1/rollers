import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMemo, useState } from 'react';
import { Action } from '../../models/action.model';

export function PageActions({ actions }: { actions?: Action[] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleActionClick = (action: Action) => {
    if (action.handle) {
      action.handle();
    } else {
      console.warn(`Action ${action.name} does not have a handle function.`);
    }
    handleClose();
  };

  const primaryAction = useMemo(() => {
    if (!actions || actions.length === 0) return null;

    let action = actions?.find((action) => action.primary);
    if (!action) {
      action = actions[0]; // Fallback to the first action if no primary action is found
    }
    return action;
  }, [actions]);

  const secondaryActions = useMemo(() => {
    if (!actions || actions.length === 0) return [];
    return actions.filter((action) => primaryAction?.name !== action.name);
  }, [actions]);

  return (
    <div className="flex items-center">
      {primaryAction && (
        <Button
          variant="outlined"
          onClick={() => handleActionClick(primaryAction)}
        >
          {primaryAction?.label}
        </Button>
      )}
      {secondaryActions.length > 0 && (
        <>
          <Button
            id="page-actions-button"
            aria-controls={open ? 'page-actions-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Actions
          </Button>
          <Menu
            id="page-actions-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'page-actions-button',
            }}
          >
            {secondaryActions.map((action) => (
              <MenuItem
                key={action.label}
                onClick={() => handleActionClick(action)}
                className="ml-2"
              >
                {action.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </div>
  );
}

export default PageActions;
