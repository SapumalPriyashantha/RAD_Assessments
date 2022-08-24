import React, { Component } from "react";
import {styleSheet} from "./style.js";
import { withStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import BasicCard from "../../pages/home";
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

class NavBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return(
            <AppBar position="fixed">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                        Dashboard
                    </Typography>
                    <div className={classes.navLinks}>
                        <Box>
                            <Link href="/home" className={classes.link}  >Home</Link>
                        </Box>
                    </div>
                    <div className={classes.navLinks}>
                        <Box>
                            <Link href="/customer" className={classes.link}  >Customer</Link>
                        </Box>
                    </div>
                    <div className={classes.navLinks}>
                        <Box>
                            <Link href="/item" className={classes.link}  >Item</Link>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
export default withStyles(styleSheet)(NavBar)
