import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { androidMenu } from "react-icons-kit/ionicons/androidMenu";
import { Icon } from "react-icons-kit";
export const BreadCrumb = () => <Icon icon={androidMenu} />;
function Header() {
  return (
    <header>
      <h3>Star Wars</h3>
      <nav className="full__screen">
        <ul>
          <li>
            <NavLink
              to="/"
              exact={true}
              className="active"
              activeClassName="is-active"
            >
              People
            </NavLink>
          </li>
          <li>
            <NavLink to="/planets" activeClassName="is-active">
              Planets
            </NavLink>
          </li>
          <li>Films</li>
          <li>starships</li>
        </ul>
        <div className="mb__screen">
          <BreadCrumb size={"100%"} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
