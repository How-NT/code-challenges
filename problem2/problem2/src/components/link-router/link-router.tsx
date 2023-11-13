import Link, { LinkProps } from '@mui/material/Link';
import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

export const LinkRouter = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & Omit<RouterLinkProps, 'color'> & { disabled?: boolean }
>(function LinkRouter(props, ref) {
  return (
    <Link
      ref={ref}
      underline="hover"
      component={RouterLink}
      rel="noopener noreferrer"
      sx={{ textTransform: 'none', cursor: 'pointer' }}
      {...props}
      target="_self"
    />
  );
});

export const IconLinkRouter = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & RouterLinkProps & { disabled?: boolean }
>(function IconLinkRouter(props, ref) {
  return (
    <Link
      ref={ref}
      component={RouterLink}
      underline="hover"
      sx={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        cursor: 'pointer',
      }}
      {...props}
      target="_self"
    />
  );
});
