import {
  Button, Menu, MenuItem,
} from '@material-ui/core';
import Link from 'components/common/Link';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { useState } from 'react';

export const Inspire = () => {
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
      <Button onClick={handleClick}>Inspire</Button>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        <NestedMenuItem
          label="Customization"
          parentMenuOpen={!!menuPosition}
        >
          <MenuItem component={Link} naked href="/inspire/customization/management">Management</MenuItem>
          <MenuItem component={Link} naked href="/inspire/customization/customize/benching">Benching</MenuItem>
          <MenuItem component={Link} naked href="/inspire/customization/customize/workstation">Workstation</MenuItem>
          <MenuItem component={Link} naked href="/inspire/customization/customize/private-office">Private Office</MenuItem>
          <MenuItem component={Link} naked href="/inspire/customization/customize/executive-office">Executive Office</MenuItem>
        </NestedMenuItem>
      </Menu>
    </>
  );
};

export default Inspire;
