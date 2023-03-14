import { Link, LinkProps } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface NavLinkProps extends LinkProps {
  activeStyle?: React.CSSProperties;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  to,
  activeStyle,
  ...rest
}) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      {...rest}
      style={
        location.pathname === to
          ? { ...rest.style, ...activeStyle }
          : rest.style
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
