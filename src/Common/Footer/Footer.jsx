import React from "react";
import { Grid } from "@material-ui/core";

//css file
import "./Footer.css";

function Footer(props) {
  return (
    <>
      <div className="footer_background mt-5 ">
        <hr style={{ width: "80%" }} />
        <Grid className="Component_main_grid mt-2 text-center ">
          <Grid item md={3} className="p-3">
            <div>
              <strong>Mon-Sat l 10 AM- 19 PM</strong>
            </div>
          </Grid>

          <Grid item md={3} className="p-3">
            <div>
              <span className="Footer_heading_Links mt-1">
                <i class="fa fa-phone"></i>
              </span>
              <span className="ml-2">9350903054</span>
            </div>
          </Grid>
          <Grid item md={3} className="p-3">
            <div className="mt-1">Login</div>
          </Grid>
          <Grid item md={3} className="p-3">
            <div
              className="Footer_heading_Links"
              onClick={() => props.history.push("/home")}
            >
              Register
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
