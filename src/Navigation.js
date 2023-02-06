import { yellow } from "@material-ui/core/colors";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const state = useSelector((state) => state);
  return (
    <div>
      <NavLink to="/personal-details" activeClassName="active">
        Personal Details
      </NavLink>{" "}
      |{" "}
      <NavLink to="/education" activeClassName="active">
        Education
      </NavLink>{" "}
      |{" "}
      <NavLink to="/work-experience" activeClassName="active">
        Work Experience
      </NavLink>{" "}
      |{" "}
      <NavLink to="/final-page" activeClassName="active">
        Final Page
      </NavLink>
      {/* {<pre style={{ backgroundColor: "yellow" }}>
          {JSON.stringify(state, null, 2)}
        </pre>} */}
    </div>
  );
};

export default Navigation;
