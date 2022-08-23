import React, { Component } from "react";
import {styleSheet} from "./style.js";
import { withStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

class NavBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return(
            <AppBar position="static">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                        Dashboard
                    </Typography>
                  {/*  <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/about" className={classes.link}>
                            About
                        </Link>
                        <Link to="/contact" className={classes.link}>
                            Contact
                        </Link>
                        <Link to="/faq" className={classes.link}>
                            FAQ
                        </Link>
                    </div>*/}
                </Toolbar>
            </AppBar>
        )
    }
}
export default withStyles(styleSheet)(NavBar)
