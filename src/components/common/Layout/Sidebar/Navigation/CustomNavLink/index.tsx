import { NavLink as ReactRouterDomLink, NavLinkProps } from 'react-router-dom';

import { CustomNavLinkProps } from '@/types/layout';

const CustomNavLink = ({
  children,
  to,
  $isSidebarOpen,
  $isToggleOpen,
  $userPath,
  ...props
}: CustomNavLinkProps & NavLinkProps) => {
  return (
    <ReactRouterDomLink
      to={to}
      end
      {...props}
    >
      {children}
    </ReactRouterDomLink>
  );
};

export default CustomNavLink;
