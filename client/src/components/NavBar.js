import React from "react";
import { useAuth0 } from "../auth0-wrapper";

import './NavBar.scss';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav>
      <img src={process.env.PUBLIC_URL + '/logo.png'} width="300" alt="Connect Our Kids Logo" />
      <div className="menu">
        {!isAuthenticated && (
          <button className="btn login-btn"
            onClick={() =>
              loginWithRedirect({})
            }
          >
            Log In
          </button>
        )}

        {isAuthenticated && <button className="btn logout-btn" onClick={() => logout()}>Log out</button>}
      </div>
    </nav>
  );
};

export default NavBar;