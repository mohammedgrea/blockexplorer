import { FC, ReactNode } from "react";
import {
  useLinkClickHandler,
  useLocation,
  LinkProps as RouterDomLinkProps,
} from "react-router-dom";
import { Navbar } from "flowbite-react";

interface LinkProps extends RouterDomLinkProps {
  to: string;
  label: string | ReactNode;
}

const Link: FC<LinkProps> = ({ to, label }) => {
  const location = useLocation();
  const clickHandler = useLinkClickHandler(to);

  return (
    <div>
      {to === "/dropdown" ? (
        <div>{label}</div>
      ) : (
        <Navbar.Link
          className="text-be-navy-blue-700 text-sm font-medium transition-all duration-300 hover:text-be-navy-blue-100"
          onClick={clickHandler}
          href={to}
          active={location.pathname === to}
        >
          <object>{label}</object>
        </Navbar.Link>
      )}
    </div>
  );
};

export default Link;
