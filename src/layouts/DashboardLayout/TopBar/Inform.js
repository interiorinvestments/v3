import {
  Button, Menu, MenuItem,
} from '@material-ui/core';
import Link from 'components/common/Link';
import NestedMenuItem from 'material-ui-nested-menu-item';
import React, { useState } from 'react';

export const Inform = () => {
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
      <Button onClick={handleClick}>Inform</Button>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        <MenuItem component={Link} naked href="/inform/key-contacts">Key Contacts</MenuItem>
        <NestedMenuItem
          label="Design Standards"
          parentMenuOpen={!!menuPosition}
        >
          <MenuItem component={Link} naked href="/inform/design-standards/floorplan">Floor Plan</MenuItem>
          <MenuItem component={Link} naked href="/inform/design-standards/workstations">Workstations</MenuItem>
          <MenuItem component={Link} naked href="/inform/design-standards/private-offices">Private Offices</MenuItem>
          <MenuItem component={Link} naked href="/inform/design-standards/meeting-rooms">Meeting Rooms</MenuItem>
          <MenuItem component={Link} naked href="/inform/design-standards/cafe-area">Café Area</MenuItem>
          <MenuItem component={Link} naked href="/inform/design-standards/collaboration-lounge">Collaboration/Lounge</MenuItem>
          <MenuItem component={Link} naked href="/inform/design-standards/accessories">Accessories</MenuItem>
        </NestedMenuItem>
        <MenuItem component={Link} naked href="/inform/warranty-maintenance">Warranty & Maintenance</MenuItem>
        {/* <MenuItem component={Link} naked href="/inform/covid">Covid Response</MenuItem> */}
        {/* <MenuItem component={Link} naked href="/inform/faqs">FAQs</MenuItem> */}
        <MenuItem component={Link} naked href="/inform/contact-us">Contact Us</MenuItem>
      </Menu>
    </>
  );
};

export default Inform;
