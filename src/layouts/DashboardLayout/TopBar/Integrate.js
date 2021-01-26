import {
  Button, Menu, MenuItem,
} from '@material-ui/core';
import Link from 'components/common/Link';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { useState } from 'react';

export const Integrate = () => {
  const [menuPosition, setMenuPosition] = useState(null);

  const handleClick = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.clientY,
      left: event.clientX,
    });
  };

  return (
    <>
      <Button onClick={handleClick}>Integrate</Button>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        <MenuItem component={Link} naked href="/integrate/budgeting">Budgeting</MenuItem>
        <NestedMenuItem
          label="Locations"
          parentMenuOpen={!!menuPosition}
        >
          <MenuItem component={Link} naked href="/integrate/locations/dallas">Dallas, TX</MenuItem>
          <MenuItem component={Link} naked href="/integrate/locations/vernonhills">Vernon Hills, IL</MenuItem>
          <MenuItem component={Link} naked href="/integrate/locations/chicago1">Chicago, IL</MenuItem>
          <MenuItem component={Link} naked href="/integrate/locations/newyork">New York, NY</MenuItem>
        </NestedMenuItem>
        <MenuItem component={Link} naked href="/integrate/inventory-control/">Inventory Control</MenuItem>
      </Menu>
    </>
  );
};

export default Integrate;
