import {
  Button, Menu, MenuItem,
} from '@material-ui/core';
import Link from 'components/common/Link';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { useState } from 'react';

export const Implement = () => {
  const [menuPosition, setMenuPosition] = useState(null);

  const handleClick = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  return (
    <>
      <Button onClick={handleClick} color="textPrimary">Implement</Button>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        <NestedMenuItem
          label="Online Management"
          parentMenuOpen={!!menuPosition}
        >
          <MenuItem component={Link} naked href="/implement/management/proposals">Proposals</MenuItem>
          <MenuItem component={Link} naked href="/implement/management/project-details">Project Details</MenuItem>
          <MenuItem component={Link} naked href="/implement/management/work-orders">Work Orders</MenuItem>
        </NestedMenuItem>
        <MenuItem component={Link} naked href="/implement/management/service">Service Request</MenuItem>
      </Menu>
    </>
  );
};

export default Implement;
